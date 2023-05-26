// Import .env variables
import dotenv from 'dotenv'
dotenv.config({ path: './.env.dev' })
// Import rollup plugins
import typescript from '@rollup/plugin-typescript' // Typescript - https://github.com/rollup/plugins/tree/master/packages/typescript#options
// import html from '@rollup/plugin-html'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import copy from 'rollup-plugin-copy'

/**
 * Rollup plugins
 * @see https://github.com/rollup/plugins
 * @type {import('rollup').RollupOptions.plugins}
 */
const plugins = [
  typescript({ module: 'esnext' }),
  // html({
  //   title: 'Modern HTML',
  //   publicPath: '/public',
  // }),
  image(),
  json(),
  url(),
  postcss(),
  copy({
    targets: [
      { src: 'public/*', dest: 'dist' },
      { src: 'src/index.html', dest: 'dist' },
    ],
  }),
  serve({
    open: true,
    openPage: '/',
    host: 'localhost',
    port: 3000,
    contentBase: ['./dist'],
  }),
  livereload({
    watch: ['./dist'],
    exts: ['html', 'js', 'css'],
  }),
]

/**
 * Rollup configuration
 * @see https://rollupjs.org/guide/en/#configuration-files
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: {
    // file: 'dist/bundle.js', // For single file build
    dir: 'dist', // For multiple file chunks build
    format: 'iife', // Format: https://rollupjs.org/guide/en/#outputformat
  },
  plugins,
  sourceMap: 'inline',
}
