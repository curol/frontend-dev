#!/bin/bash

# Transpile one file and emit to stdout
npx swc ./src/index.ts
 
# Transpile one file and emit to `output.js`
npx swc ./src/index.ts -o index.js
 
# Transpile and write to /output dir
npx swc ./src -d ./dist