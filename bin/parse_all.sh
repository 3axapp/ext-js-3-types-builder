#!/usr/bin/env bash
set -e

for f in ../data/1-docs/*.js; do
  filename="${f##*/}"
  filename="${filename%%.js}"
  SOURCE="../data/1-docs/$filename.js"
  CONFIG="../data/2-configs/$filename.json"
  echo $filename
  cat $SOURCE|node ../dist/parser.js | jq > $CONFIG
done
