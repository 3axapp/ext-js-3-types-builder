#!/usr/bin/env bash
set -e

rm -f "../types/index.d.ts"
for f in ../data/1-docs/*.js; do
  filename="${f##*/}"
  filename="${filename%%.js}"
  CONFIG="../data/2-configs/$filename.json"
  TARGET="../types/$filename.d.ts"

  echo $filename
  cat $CONFIG|node ../dist/printer.js > $TARGET
  echo "import \"./${filename}\";" >> "../types/index.d.ts"
done
