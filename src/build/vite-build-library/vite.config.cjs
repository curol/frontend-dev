const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'MyLib',
    //   fileName: (format) => `My-Library-Name.${format}.js`
      fileName: 'my-lib'
    },
    // rollupOptions: {
    //     // make sure to externalize deps that shouldn't be bundled
    //     // into your library
    //     external: ['vue'],
    //     output: {
    //       // Provide global variables to use in the UMD build
    //       // for externalized deps
    //       globals: {
    //         vue: 'Vue',
    //       },
    // },
  }
});