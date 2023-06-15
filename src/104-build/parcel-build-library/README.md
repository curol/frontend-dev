# Build library with builder Parcel

See, [Parcel - build library](https://parceljs.org/getting-started/library/)

## Notes

### Targets

See, [Parcel - targets](https://parceljs.org/features/targets/)

### Output format

`'global' | 'esmodule' | 'commonjs'`

Defines what type of module to output.

global – a classic script that could be loaded in a <script> tag in the browser. Not supported for library targets.

esmodule – an ES module using import and export statements. Could be loaded in a <script type="module"> tag in the browser, or loaded by Node.js or another bundler.

commonjs – a CommonJS module using require and module.exports. Could be loaded by Node.js or another bundler.

For builtin library targets (e.g. main and module), the outputFormat is automatically inferred. The file extension defined in the target's top-level package.json field may also influence the output format. See Library targets above for more details.

See, [Parcel - output format](https://parceljs.org/features/targets/#outputformat)



### CommonJS and ES modules

Parcel will output commonjs and esm using the `package.json` config.

```js
{
  "source": "src/index.ts",
  "main": "dist/index.js",
  "module": "dist/module.js",
  "types": "dist/types.d.ts",
}
```


Parcel will output `dist/main.js` as a CommonJS module, and `dist/module.js ` as an ES module. Tools that consume your library will choose whichever of these they support.

[commonjs and es modules](https://parceljs.org/getting-started/library/#commonjs-and-es-modules)