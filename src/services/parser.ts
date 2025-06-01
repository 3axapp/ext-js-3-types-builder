import {JSDOM} from "jsdom";
import {
  ClassConstructor,
  ClassData,
  ClassMethod,
  ClassMethodArgument,
  ClassMethods,
  ClassProperties,
  ClassProperty,
  ExtClassData,
  ExtClassMember,
  MemberTypes,
  VisibilityTypes
} from "./shared.js";

export class Parser
{
  private eventMethods = ['addListener', 'on', 'fireEvent', 'hasListener', 'removeListener', 'un'];
  private replaceNames = {
    this : 'thisCmp',
    class: 'className',
    old  : 'oldValue',
    new  : 'newValue',
    null : 'willAlwaysBeNull',
  };
  private primitives   = {
    ContainerLayout     : () => 'Ext.layout.ContainerLayout',
    Region              : () => 'Ext.lib.Region',
    Observable          : () => 'Ext.util.Observable',
    CompositeElement    : () => 'Ext.CompositeElement',
    CompositeElementLite: () => 'Ext.CompositeElementLite',
    MixedCollection     : () => 'Ext.util.MixedCollection',
    Menu                : () => 'Ext.menu.Menu',
    Connection          : () => 'Ext.data.Connection',
    'Ext.data.Store'    : () => 'Ext.data.Store<R>',
    Record              : () => 'Ext.data.Record<R>',
    'Record[]'          : () => 'Ext.data.Record<R>[]',
    Iterable            : () => 'Iterable<unknown>',
    '*'                 : () => 'unknown',
    HtmlElement         : () => 'HTMLElement',
    XMLElement          : () => 'Node',
    Float               : () => 'number',
    Number              : () => 'number',
    String              : () => 'string',
    Symbol              : () => 'symbol',
    Boolean             : () => 'boolean',
    Null                : () => 'null',
    Object              : () => 'object',
    Mixed               : () => 'unknown',
    misc                : () => 'unknown',
    Array               : () => 'unknown[]',
    Arrays              : () => 'unknown[][]',
    NodeLists           : () => 'NodeList[]',
    Class               : (name) =>
    {
      if (name == 'xtype') {
        return 'typeof Ext.Component';
      }
      return 'typeof Ext.util.Observable';
    },
    Constructor         : (name) =>
    {
      if (name == 'cls') {
        return 'typeof Ext.Component';
      }
      return 'typeof Ext.util.Observable';
    },
  };
  private thisClassName!: string
  private data!: ExtClassData;
  private dom: JSDOM;
  private hasEvents: boolean;

  public parse(data: ExtClassData): ClassData
  {
    this.data          = data;
    this.dom           = new JSDOM(data.html);
    const namespace    = data.name.split('.');
    const name         = namespace.splice(-1).join('');
    this.thisClassName = name;
    this.hasEvents     = !!this.getMemberByTagName(MemberTypes.EVENT).length;
    return {
      name             : name,
      namespace        : namespace.join('.'),
      extends          : data.extends,
      singleton        : data.singleton ? true : undefined,
      constructorMethod: this.getConstructor(this.getMemberByTagName(MemberTypes.CONFIG)),
      properties       : this.getProperties(this.getMemberByTagName(MemberTypes.PROPERTY)),
      methods          : this.getMethods(this.getMemberByTagName(MemberTypes.METHOD)),
      events           : this.getEvents(this.getMemberByTagName(MemberTypes.EVENT)),
    };
  }

  private getEvents(members: ExtClassMember[]): ClassMethods
  {
    const events = [];

    for (let member of members) {
      events.push(this.getMethodTypes({name: member.name, arguments: []}, member));
    }

    return events;
  }

  private getMemberByTagName(tagName: MemberTypes): ExtClassMember[]
  {
    return this.data.members.filter(i =>
    {
      if (i.tagname == tagName && (tagName == MemberTypes.CONFIG || tagName == MemberTypes.EVENT || i.owner == this.data.name)) {
        return true;
      }

      return tagName == MemberTypes.METHOD && this.eventMethods.includes(i.name);
    });
  }

  private getConstructor(members: ExtClassMember[]): ClassConstructor
  {
    const config = [];

    for (let member of members) {
      if (member.meta.private || member.meta.protected) {
        continue;
      }
      config.push(this.getConfigPropertyType({name: `${member.name}?`}, member.id));
    }

    if (!config.length) {
      return null;
    }

    return {
      config,
    };

  }

  private getProperties(members: ExtClassMember[]): ClassProperties
  {
    const properties = [];

    for (let member of members) {
      properties.push(this.gePropertyTypes(
        {
          name      : member.name,
          static    : member.meta.static,
          type      : [],
          visibility: member.meta.private
                      ? VisibilityTypes.PRIVATE
                      : (member.meta.protected ? VisibilityTypes.PROTECTED : VisibilityTypes.PUBLIC),
        },
        member.id
      ));
    }

    return properties;
  }

  private gePropertyTypes(config: Partial<ClassProperty>, id: string): ClassProperty
  {
    const block     = this.dom.window.document.getElementById(id);
    const title     = block.querySelector('.title');
    const signature = title.querySelector('.signature');
    signature.remove();

    const types = title.textContent.split(' ').slice(-1)[0].split(/[/|]/);

    config.type    = types.map(i => this.replaceType(i));
    config.comment = ''; // block.querySelector('.long').textContent,
    return config as ClassProperty;
  }

  private getMethods(members: ExtClassMember[]): ClassMethods
  {
    const methods = [];

    for (let member of members) {
      if (member.id == 'method-constructor') {
        continue;
      }
      methods.push(this.getMethodTypes(
        {
          name      : member.name,
          static    : member.meta.static,
          returnType: [],
          visibility: member.meta.private
                      ? VisibilityTypes.PRIVATE
                      : (member.meta.protected ? VisibilityTypes.PROTECTED : VisibilityTypes.PUBLIC),
          arguments : [],//Record<string, ClassMethodArgument>,
        },
        member
      ))
    }

    return methods;
  }

  private getMethodTypes(config: Partial<ClassMethod>, member: ExtClassMember): ClassMethod
  {
    const block = this.dom.window.document.getElementById(member.id);
    const pa    = block.querySelectorAll('.pa');
    for (let p of pa) {
      if (p.textContent == 'Parameters') {
        for (let c of p.nextSibling.children) {
          c          = c.cloneNode(true);
          const name = c.querySelector('.pre');
          const desc = c.querySelector('.sub-desc');
          if (!name) {
            continue;
          }
          name.remove();
          desc.remove();
          const isOptional      = c.textContent.includes(' (optional)');
          const isDestructuring = c.textContent.includes('...');
          const types           = c.textContent
                                   .replaceAll('...', '')
                                   .replaceAll(' (optional)', '')
                                   .split(' : ')[1].split(/[/|]/);
          config.arguments.push({
            name   : (isDestructuring ? '...' : '') + this.replaceName(name.textContent) + (isOptional ? '?' : ''),
            comment: '', //desc.textContent,
            type   : types.map(i => this.replaceType(i, name.textContent) + (isDestructuring ? '[]' : '')),
          });
        }
        continue;
      }
      if (p.textContent == 'Returns') {
        for (let c of p.nextSibling.children) {
          const types = c.querySelector('.pre').textContent.split('/').map(i => this.replaceType(i));
          config.returnType.push(...types);
        }
        continue;
      }
    }

    if (this.eventMethods.includes(config.name)) {
      this.prepareEventMethodArguments(config as ClassMethod);
    }

    if (member.meta.chainable) {
      config.returnType = ['this'];
    }

    return config as ClassMethod;
  }

  private replaceName(name: string): string
  {
    if (name.includes('-')) {
      name = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
      name = name[0].toLowerCase() + name.slice(1);
    }
    return this.replaceNames[name] || name;
  }

  private getConfigPropertyType(argument: Partial<ClassMethodArgument>, id: string): ClassMethodArgument
  {
    const block = this.dom.window.document.getElementById(id);
    const title = block.querySelector('.title').textContent;
    const types = title.split(' ').slice(-1)[0].split('/');

    argument.type    = types.map(i => this.replaceType(i));
    argument.comment = ''; // block.querySelector('.long').textContent,

    return argument as ClassMethodArgument;
  }

  private replaceType(type: string, name?: string): string
  {
    if (name == 'this') {
      return this.thisClassName;
    }
    type = type.replace('★', '');
    return this.primitives[type] ? this.primitives[type](name) : type;
  }

  private prepareEventMethodArguments(config: ClassMethod): void
  {
    if (!this.hasEvents) {
      return;
    }
    const eventType = `I${this.thisClassName}Events`;

    if (config.name != 'on' || config.arguments[0].name == 'eventName') {
      config.name += `<T extends ${eventType} = ${eventType}, E extends keyof T = keyof T>`;
    }

    for (let a of config.arguments) {
      if (a.name == 'eventName') {
        a.type = [`E`];
      } else if (a.name == 'handler' || a.name == 'fn') {
        a.type = ['T[E]']
      } else if (a.name == '...args') {
        a.type = ['Parameters<T[E]>'];
      }
    }
  }
}
