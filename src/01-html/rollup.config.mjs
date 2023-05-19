import typescript from '@rollup/plugin-typescript' // Typescript - https://github.com/rollup/plugins/tree/master/packages/typescript#options
import html from '@rollup/plugin-html'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import strip from '@rollup/plugin-strip'
import terser from '@rollup/plugin-terser'

/**
 * Rollup plugins
 * @see https://github.com/rollup/plugins
 */
const plugins = [
  typescript({ module: 'esnext' }),
  html({
    title: 'Modern HTML',
  }),
  image(),
  json(),
  url(),
  postcss(),
  strip(),
  // terser(),
]

/**
 * Rollup configuration
 * @see https://rollupjs.org/guide/en/#configuration-files
 *
 */
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js', // For single file build
    // dir: 'dist', // For multiple file chunks build
    format: 'iife', // Format: https://rollupjs.org/guide/en/#outputformat
  },
  plugins,
  sourceMap: 'inline',
}
