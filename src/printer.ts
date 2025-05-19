#!/usr/bin/env node
import {Printer} from "./services/printer.js";

let data = '';
// process.stdin.on("data", d => data += d);
process.stdin.on('readable', () =>
{
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    data += chunk;
  }
});
process.stdin.on('end', () =>
{
  process.stdout.write((new Printer()).print(JSON.parse(data)));
});
