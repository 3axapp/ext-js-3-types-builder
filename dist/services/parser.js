import { JSDOM } from "jsdom";
import { MemberTypes, VisibilityTypes } from "./shared.js";
export class Parser {
    eventMethods = ['addListener', 'on', 'fireEvent', 'hasListener', 'removeListener', 'un'];
    replaceNames = {
        this: 'thisCmp',
        class: 'className',
        old: 'oldValue',
        new: 'newValue',
    };
    primitives = {
        ContainerLayout: () => 'Ext.layout.ContainerLayout',
        Region: () => 'Ext.lib.Region',
        Observable: () => 'Ext.util.Observable',
        CompositeElement: () => 'Ext.CompositeElement',
        CompositeElementLite: () => 'Ext.CompositeElementLite',
        MixedCollection: () => 'Ext.util.MixedCollection',
        Menu: () => 'Ext.menu.Menu',
        Record: () => 'Ext.data.Record',
        "Record[]": () => 'Ext.data.Record[]',
        HtmlElement: () => 'HTMLElement',
        XMLElement: () => 'Node',
        Float: () => 'number',
        Number: () => 'number',
        String: () => 'string',
        Symbol: () => 'symbol',
        Boolean: () => 'boolean',
        Null: () => 'null',
        Object: () => 'object',
        Mixed: () => 'unknown',
        Array: () => 'unknown[]',
        Class: (name) => {
            if (name == 'xtype') {
                return 'typeof Ext.Component';
            }
            return 'typeof Ext.util.Observable';
        },
        Constructor: (name) => {
            if (name == 'cls') {
                return 'typeof Ext.Component';
            }
            return 'typeof Ext.util.Observable';
        },
    };
    thisClassName;
    data;
    dom;
    hasEvents;
    parse(data) {
        this.data = data;
        this.dom = new JSDOM(data.html);
        const namespace = data.name.split('.');
        const name = namespace.splice(-1).join('');
        this.thisClassName = name;
        this.hasEvents = !!this.getMemberByTagName(MemberTypes.EVENT).length;
        return {
            name: name,
            namespace: namespace.join('.'),
            extends: data.extends,
            constructorMethod: this.getConstructor(this.getMemberByTagName(MemberTypes.CONFIG)),
            properties: this.getProperties(this.getMemberByTagName(MemberTypes.PROPERTY)),
            methods: this.getMethods(this.getMemberByTagName(MemberTypes.METHOD)),
            events: this.getEvents(this.getMemberByTagName(MemberTypes.EVENT)),
        };
    }
    getEvents(members) {
        const events = [];
        for (let member of members) {
            events.push(this.getMethodTypes({ name: member.name, arguments: [] }, member));
        }
        return events;
    }
    getMemberByTagName(tagName) {
        return this.data.members.filter(i => {
            if (i.tagname == tagName && (tagName == MemberTypes.CONFIG || tagName == MemberTypes.EVENT || i.owner == this.data.name)) {
                return true;
            }
            return tagName == MemberTypes.METHOD && this.eventMethods.includes(i.name);
        });
    }
    getConstructor(members) {
        const config = [];
        for (let member of members) {
            if (member.meta.private || member.meta.protected) {
                continue;
            }
            config.push(this.getConfigPropertyType({ name: `${member.name}?` }, member.id));
        }
        if (!config.length) {
            return null;
        }
        return {
            config,
        };
    }
    getProperties(members) {
        const properties = [];
        for (let member of members) {
            properties.push(this.gePropertyTypes({
                name: member.name,
                static: member.meta.static,
                type: [],
                visibility: member.meta.private
                    ? VisibilityTypes.PRIVATE
                    : (member.meta.protected ? VisibilityTypes.PROTECTED : VisibilityTypes.PUBLIC),
            }, member.id));
        }
        return properties;
    }
    gePropertyTypes(config, id) {
        const block = this.dom.window.document.getElementById(id);
        const title = block.querySelector('.title');
        const signature = title.querySelector('.signature');
        signature.remove();
        const types = title.textContent.split(' ').slice(-1)[0].split(/[/|]/);
        config.type = types.map(i => this.replaceType(i));
        config.comment = ''; // block.querySelector('.long').textContent,
        return config;
    }
    getMethods(members) {
        const methods = [];
        for (let member of members) {
            if (member.id == 'method-constructor') {
                continue;
            }
            methods.push(this.getMethodTypes({
                name: member.name,
                static: member.meta.static,
                returnType: [],
                visibility: member.meta.private
                    ? VisibilityTypes.PRIVATE
                    : (member.meta.protected ? VisibilityTypes.PROTECTED : VisibilityTypes.PUBLIC),
                arguments: [], //Record<string, ClassMethodArgument>,
            }, member));
        }
        return methods;
    }
    getMethodTypes(config, member) {
        const block = this.dom.window.document.getElementById(member.id);
        const pa = block.querySelectorAll('.pa');
        for (let p of pa) {
            if (p.textContent == 'Parameters') {
                for (let c of p.nextSibling.children) {
                    c = c.cloneNode(true);
                    const name = c.querySelector('.pre');
                    const desc = c.querySelector('.sub-desc');
                    if (!name) {
                        continue;
                    }
                    name.remove();
                    desc.remove();
                    const isOptional = c.textContent.includes(' (optional)');
                    const isDestructuring = c.textContent.includes('...');
                    const types = c.textContent
                        .replaceAll('...', '')
                        .replaceAll(' (optional)', '')
                        .split(' : ')[1].split(/[/|]/);
                    config.arguments.push({
                        name: (isDestructuring ? '...' : '') + this.replaceName(name.textContent) + (isOptional ? '?' : ''),
                        comment: '', //desc.textContent,
                        type: types.map(i => this.replaceType(i, name.textContent) + (isDestructuring ? '[]' : '')),
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
            this.prepareEventMethodArguments(config);
        }
        if (member.meta.chainable) {
            config.returnType = ['this'];
        }
        return config;
    }
    replaceName(name) {
        return this.replaceNames[name] || name;
    }
    getConfigPropertyType(argument, id) {
        const block = this.dom.window.document.getElementById(id);
        const title = block.querySelector('.title').textContent;
        const types = title.split(' ').slice(-1)[0].split('/');
        argument.type = types.map(i => this.replaceType(i));
        argument.comment = ''; // block.querySelector('.long').textContent,
        return argument;
    }
    replaceType(type, name) {
        if (name == 'this') {
            return this.thisClassName;
        }
        type = type.replace('★', '');
        return this.primitives[type] ? this.primitives[type](name) : type;
    }
    prepareEventMethodArguments(config) {
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
            }
            else if (a.name == 'handler') {
                a.type = ['T[E]'];
            }
            else if (a.name == '...args') {
                a.type = ['Parameters<T[E]>'];
            }
        }
    }
}
