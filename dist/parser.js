#!/usr/bin/env node
import { Parser } from "./services/parser.js";
const JsonP = new Proxy({}, {
    get: (target, p, receiver) => {
        return (value) => {
            process.stdout.write(JSON.stringify((new Parser()).parse(value)));
        };
    }
});
global['Ext'] = { data: { JsonP } };
let data = '';
// process.stdin.on("data", d => data += d);
process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        data += chunk;
    }
});
process.stdin.on('end', () => {
    eval(data);
});
