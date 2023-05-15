const typescript = require('@rollup/plugin-typescript') // Typescript - https://github.com/rollup/plugins/tree/master/packages/typescript#options
// const html = require('@rollup/plugin-html') // HTML - https://github.com/rollup/plugins/tree/master/packages/html#options

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js', // For single file build
    // dir: 'dist', // For multiple file chunks build
    format: 'iife', // Format: https://rollupjs.org/guide/en/#outputformat
  },
  plugins: [typescript({ module: 'esnext' })],
  sourceMap: 'inline',
}
