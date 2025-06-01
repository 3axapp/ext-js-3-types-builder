import {ClassData, ClassEvent, ClassMethod, ClassMethodArgument, ClassProperty} from "./shared.js";
import {Indent} from "../models/indent.js";

export class Printer
{

  private data: ClassData;

  public print(data: ClassData): string
  {
    this.data = data;
    return this.printNamespace();
  }

  private printNamespace(): string
  {
    let result   = '';
    const indent = new Indent();
    if (this.data.namespace) {
      return `declare namespace ${this.data.namespace} {\n${this.printClass(indent.inc())}${this.printTypes(indent.inc())}}\n`;
    }
    return `declare ${this.printClass(indent)}`;
  }

  private printTypes(indent: Indent): string
  {
    return this.printConfigType(indent) + this.printEventTypes(indent);
  }

  private printConfigType(indent: Indent): string
  {
    if (!this.data.constructorMethod) {
      return '';
    }

    const indent2 = indent.inc();
    let result    = `\n${indent}interface ${this.getConfigInterfaceName()} {\n`;

    for (let a of this.data.constructorMethod.config) {
      result += `${indent2}${a.name}: ${a.type.join(' | ')},\n`;
    }

    return `${result}${indent}}\n`
  }

  private printEventTypes(indent: Indent): string
  {
    if (!this.data.events.length) {
      return '';
    }

    const indent2 = indent.inc();
    let result    = `\n${indent}interface ${this.getEventInterfaceName()}`;

    if (this.data.types) {
      result += `<${this.data.types.map(i =>
      {
        let type = i.name;
        if (i.extends) {
          type += ` extends ${i.extends}`;
        }
        return type;
      }).join(', ')}>`;
    }

    result += ` extends globalThis.Record<string, (...args: any[]) => boolean | void> {\n`;

    for (let event of this.data.events) {
      result += `${indent2}${event.name}: ${this.printEventListener(event)};\n`
    }

    return `${result}${indent}}\n`;
  }

  private printClass(indent: Indent): string
  {
    if (this.data.singleton) {
      return this.printSingleton(indent);
    }

    let result = `${indent}class ${this.data.name}`;

    if (this.data.types) {
      result += `<${this.data.types.map(i =>
      {
        let type = i.name;
        if (i.extends) {
          type += ` extends ${i.extends}`;
        }
        if (i.default) {
          type += ` = ${i.default}`;
        }
        return type;
      }).join(', ')}>`;
    }

    if (this.data.extends) {
      result += ` extends ${this.data.extends}`;
    }

    result += ' {\n';

    result += this.printProperties(indent.inc());
    result += this.printConstructor(indent.inc());
    result += this.printMethods(indent.inc());

    return `${result}${indent}}\n`;
  }

  private printProperties(indent: Indent): string
  {
    let result = '';
    for (let property of this.data.properties) {
      result += this.printProperty(property, indent);
    }
    return result;
  }

  private printProperty(property: ClassProperty, indent: Indent): string
  {
    let result = [];

    if (this.data.singleton) {
      result.push('const');
    } else {
      result.push(property.visibility || 'public');
      if (property.static) {
        result.push('static');
      }
    }

    result.push(`${property.name}:`);
    result.push(`${property.type.join(' | ')};\n`);

    return `\n${indent}${result.join(' ')}`;
  }

  private printConstructor(indent: Indent): string
  {
    if (!this.data.constructorMethod) {
      return '';
    }
    return `\n${indent}public constructor(config: ${this.getConfigInterfaceName()});\n`;
  }

  private getConfigInterfaceName(withNamespace = true): string
  {
    let result = '';
    // if (withNamespace && this.data.namespace) {
    //   result += `${this.data.namespace}.`;
    // }
    return `${result}I${this.data.name}Config`;
  }

  private printMethods(indent: Indent): string
  {
    let result = '';
    for (let method of this.data.methods) {
      result += this.printMethod(method, indent);
    }
    return result;
  }

  private printMethod(method: ClassMethod, indent: Indent)
  {
    let result = [];

    if (this.data.singleton) {
      result.push(`function ${method.name}(${this.printArguments(method.arguments)}): `);
    } else {
      result.push(method.visibility || 'public');
      if (method.static) {
        result.push('static');
      }
      result.push(`${method.name}(${this.printArguments(method.arguments)}):`);
    }

    result.push(`${method.returnType.join(' | ') || 'void'};\n`);

    return `\n${indent}${result.join(' ')}`;
  }

  private printArguments(classMethodArguments: ClassMethodArgument[]): string
  {
    let result = [];

    for (let a of classMethodArguments) {
      result.push(`${a.name}: ${a.type.join(' | ')}`);
    }

    return result.join(', ');
  }

  private printEventListener(event: ClassEvent): string
  {
    return `(${this.printArguments(event.arguments)}) => boolean | void`;
  }

  private getEventInterfaceName(): string
  {
    return `I${this.data.name}Events`;
  }

  private printSingleton(indent: Indent): string
  {
    let result = `${indent}namespace ${this.data.name}`;

    result += ' {\n';

    result += this.printProperties(indent.inc());
    result += this.printMethods(indent.inc());

    return `${result}${indent}}\n`;
  }
}
