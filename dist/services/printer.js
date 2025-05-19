import { Indent } from "../models/indent.js";
export class Printer {
    data;
    print(data) {
        this.data = data;
        return this.printNamespace();
    }
    printNamespace() {
        let result = '';
        const indent = new Indent();
        if (this.data.namespace) {
            return `declare namespace ${this.data.namespace} {\n${this.printClass(indent.inc())}${this.printTypes(indent.inc())}}\n`;
        }
        return `declare ${this.printClass(indent)}`;
    }
    printTypes(indent) {
        return this.printConfigType(indent) + this.printEventTypes(indent);
    }
    printConfigType(indent) {
        if (!this.data.constructorMethod) {
            return '';
        }
        const indent2 = indent.inc();
        let result = `\n${indent}interface ${this.getConfigInterfaceName()} {\n`;
        for (let a of this.data.constructorMethod.config) {
            result += `${indent2}${a.name}: ${a.type.join(' | ')},\n`;
        }
        return `${result}${indent}}\n`;
    }
    printEventTypes(indent) {
        if (!this.data.events.length) {
            return '';
        }
        const indent2 = indent.inc();
        let result = `\n${indent}interface ${this.getEventInterfaceName()} extends Record<string, (...args: any[]) => boolean | void> {\n`;
        for (let event of this.data.events) {
            result += `${indent2}${event.name}: ${this.printEventListener(event)};\n`;
        }
        return `${result}${indent}}\n`;
    }
    printClass(indent) {
        let result = `${indent}class ${this.data.name}`;
        if (this.data.extends) {
            result += ` extends ${this.data.extends}`;
        }
        result += ' {\n';
        result += this.printProperties(indent.inc());
        result += this.printConstructor(indent.inc());
        result += this.printMethods(indent.inc());
        return `${result}${indent}}\n`;
    }
    printProperties(indent) {
        let result = '';
        for (let property of this.data.properties) {
            result += this.printProperty(property, indent);
        }
        return result;
    }
    printProperty(property, indent) {
        let result = [property.visibility || 'public'];
        if (property.static) {
            result.push('static');
        }
        result.push(`${property.name}:`);
        result.push(`${property.type.join(' | ')};\n`);
        return `\n${indent}${result.join(' ')}`;
    }
    printConstructor(indent) {
        if (!this.data.constructorMethod) {
            return '';
        }
        return `\n${indent}public constructor(config: ${this.getConfigInterfaceName()});\n`;
    }
    getConfigInterfaceName(withNamespace = true) {
        let result = '';
        // if (withNamespace && this.data.namespace) {
        //   result += `${this.data.namespace}.`;
        // }
        return `${result}I${this.data.name}Config`;
    }
    printMethods(indent) {
        let result = '';
        for (let method of this.data.methods) {
            result += this.printMethod(method, indent);
        }
        return result;
    }
    printMethod(method, indent) {
        let result = [method.visibility || 'public'];
        if (method.static) {
            result.push('static');
        }
        result.push(`${method.name}(${this.printArguments(method.arguments)}):`);
        result.push(`${method.returnType.join(' | ') || 'void'};\n`);
        return `\n${indent}${result.join(' ')}`;
    }
    printArguments(classMethodArguments) {
        let result = [];
        for (let a of classMethodArguments) {
            result.push(`${a.name}: ${a.type.join(' | ')}`);
        }
        return result.join(', ');
    }
    printEventListener(event) {
        return `(${this.printArguments(event.arguments)}) => boolean | void`;
    }
    getEventInterfaceName() {
        return `I${this.data.name}Events`;
    }
}
