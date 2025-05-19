#!/usr/bin/env bash
set -e
SOURCE="../data/1-docs/$1.js"
CONFIG="../data/2-configs/$1.json"
TARGET="../types/$1.d.ts"
cat $SOURCE|node ../dist/parser.js | tee $CONFIG | node ../dist/printer.js > $TARGET
