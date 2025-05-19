#!/usr/bin/env sh
jq -r '.[]' ../data/classes.json | while read -r class; do echo "$class"; curl "https://docs.sencha.com/extjs/3.4.0/output/${class}.js" -s -o "../data/1-docs/${class}.js"; done
