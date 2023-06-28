# Setting up Webpack for any Typescript project

Welcome to step by step hands-on guide to setup webpack in your upcoming typescript project.
Please follow the steps and you should be able to create your own webpack project. Please download the source code [from github.](https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript)

You will learn below things:

1. ✅Create a Typescript node.js project.
2. ✅Install Dependencies with webpack & typescripts.
3. ✅Use Webpack CLI to crate `webpack.config.js` file and modify webpack.config.js based on our need.
4. ✅Add Build script in package.json At this point you should see the dist folder created with bundle file.
5. ✅Create TypeDefinition Bundle.
6. ✅Clean up dist folder before create bundle.
7. ✅Copy your library `package.json` to your dist folder.
8. ✅Creating Typescript documentation of your project

**Table of Contents**

- [Setting up Webpack for any Typescript project from Scratch](#setting-up-webpack-for-any-typescript-project-from-scratch)
  - [🌄Creating a Typescript Node.js Project](#%F0%9F%8C%84creating-a-typescript-nodejs-project)
    - [Step 1- Install Dependencies](#step-1--install-dependencies)
    - [Step 2- Add TSConfig File ( required for typescript project)](#step-2--add-tsconfig-file--required-for-typescript-project)
    - [Step 3- Create Calculator.ts file](#step-3--create-calculatorts-file)
    - [Step 4- Create Index.ts File](#step-4--create-indexts-file)
  - [🚿Creating Webpack.config.js file](#%F0%9F%9A%BFcreating-webpackconfigjs-file)
    - [Adding Entry Point in Webpack](#adding-entry-point-in-webpack)
    - [Adding Typescript Loader](#adding-typescript-loader)
    - [Remove Chunk Hashing](#remove-chunk-hashing)
    - [Add devtools](#add-devtools)
    - [Add Resolve for Typescript extensions](#add-resolve-for-typescript-extensions)
  - [🔧Add Build Script in package.json](#%F0%9F%94%A7add-build-script-in-packagejson)
  - [🍺Create TypeDefinition Bundle](#%F0%9F%8D%BAcreate-typedefinition-bundle)
    - [Step 1- add fix for type definition bundler webpack plugin](#step-1--add-fix-for-type-definition-bundler-webpack-plugin)
    - [Step 2- add DeclarationBundlerPlugin to webpack.config.js](#step-2--add-declarationbundlerplugin-to-webpackconfigjs)
    - [Step 3- Create Build](#step-3--create-build)
  - [🌱Clean up dist folder before create bundle.](#%F0%9F%8C%B1clean-up-dist-folder-before-create-bundle)
  - [📠Copy your library `package.json` to your dist folder](#%F0%9F%93%A0copy-your-library-packagejson-to-your-dist-folder)
    - [Step 1- Create `src\package.json` file with below code.](#step-1--create-srcpackagejson-file-with-below-code)
    - [Step 3- Copy package.json after build](#step-3--copy-packagejson-after-build)
  - [📝Creating Typescript documentation of your project](#%F0%9F%93%9Dcreating-typescript-documentation-of-your-project)
    - [Step 1- Install typedoc](#step-1--install-typedoc)
    - [Step 2- Update webpack.config.js](#step-2--update-webpackconfigjs)

## 🌄Creating a Typescript Node.js Project

Run below script to create default node.js project.

    npm init --y

### Step 1- Install Dependencies

Run below script to get all of the dependencies

    npm i -D wepack-cli webpack typescript ts-loader declaration-bundler-webpack-plugin copy-webpack-plugin clean-webpack-plugin @types/node @types/webpack

package.json looks like this:

```js
{
    "name": "@scci-questions/itemslibrary-contracts-app",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {},
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^12.0.4",
        "@types/webpack": "^4.4.32",
        "clean-webpack-plugin": "^3.0.0",
        "copy-webpack-plugin": "^5.0.3",
        "declaration-bundler-webpack-plugin": "^1.0.3",
        "ts-loader": "^6.0.1",
        "typescript": "^3.5.1",
        "webpack": "^4.32.2",
        "webpack-cli": "^3.3.2",
        "wepack-cli": "0.0.1-security"
    }
}

```

### Step 2- Add TSConfig File ( required for typescript project)

Add tsconfig file at the root of the project
`tsconfig.json`

```js
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "declaration": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "."
  },
  "include": ["src"]
}
```

### Step 3- Create Calculator.ts file

`src\calculator.ts`

```ts
export class Calculator {
    static version = '1'
    constructor() {}
    add(a: number, b: number) {
        console.log(`version ${Calculator.version}`)
        return a + b
    }
}
```

### Step 4- Create Index.ts File

create index file to export all of the public apis/modules.

`src\index.ts`

```ts
export * from './calculator'
```

## 🚿Creating Webpack.config.js file

Run below script to go with interactive webpack cli

    npx webpack-cli init

Webpack cli will ask you below questions and then it will create the webpack.config.js file automatically
See my answers to below questions.

```
? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index]
? Which folder will your generated bundles be in? [default: dist]:
? Will you be using ES2015? No
? Will you use one of the below CSS solutions? No
```

![questions](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/2113b81710d56430ab93549dda834d4d0f269f12/z_interactive-webpack-cli.PNG)

**Will you be using ES2015?**

Answer: No, since I will use Typescript therefore I answer No to below question.

**Will you use one of the below CSS solutions?**

Answer: No, since My project is purely typescript library project I don't have web project also I don't have html css. Therefore, I selected no for CSS question.

### Adding Entry Point in Webpack

```ts
    entry: {
        "mylib": path.resolve(__dirname, 'src/index.ts')
    },
```

### Adding Typescript Loader

Add below rule in your `webpack.config.js` file.

```ts
  module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
```

### Remove Chunk Hashing

Normally webpack will create a bundle file with hashed file name. I personally don't like it therefore I am removing the hash from output. Feel free to skip this step.

`webpack.config.js`

```ts
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
```

### Add devtools

In `webpack.config.js` add devtool

    devtool:'source-map',

### Add Resolve for Typescript extensions

In `webpack.config.js` add resolve

    resolve: { extensions: ['.ts'] },

## 🔧Add Build Script in package.json

```js
"scripts": {
    "build": "webpack"
},
```

Now if you run npm run build you should see the dist folder to be created with your output file.

**Build Output in Dist Folder:**

![Build Output in Dist Folder](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/beea898180eaa04e28268155ac89661331d6bc44/z_build_output.PNG)

<a href="#">Go to Top</a>

🏆Commit Link https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b

## 🍺Create TypeDefinition Bundle

It is always a good idea to also create type definition bundle so that your library can be used by other projects and they can get the type intellisense.

### Step 1- add fix for type definition bundler webpack plugin

Add below file `declaration-bundler-webpack-plugin.fix.js`

```js
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

let buggyFunc = DeclarationBundlerPlugin.prototype.generateCombinedDeclaration
DeclarationBundlerPlugin.prototype.generateCombinedDeclaration = function(
    declarationFiles
) {
    for (var fileName in declarationFiles) {
        let declarationFile = declarationFiles[fileName]
        declarationFile._value =
            declarationFile._value || declarationFile.source()
    }
    return buggyFunc.call(this, declarationFiles)
}

module.exports = DeclarationBundlerPlugin
```

### Step 2- add DeclarationBundlerPlugin to webpack.config.js

```js
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')

...
 plugins: [
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        })
    ],
...
```

Complete webpack.config.js file looks like below:

```js
const webpack = require('webpack')
const path = require('path')
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        mylib: path.resolve(__dirname, 'src/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: { extensions: ['.ts'] },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },

    mode: 'development',
    plugins: [
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
}
```

### Step 3- Create Build

Now run `npm run build`
It will crate dist folder with library bundle and type definition bundle as well.

Dist folder with `mylib.js` and `@types`

![DIST with mylib and types image](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/3910cb02805c5530ba828a5662ae2355d2055d43/z_dist%2520with%2520typedefinition%2520bundle.PNG)

<a href="#">Go to Top</a>

🏆Commit Link https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b

## 🌱Clean up dist folder before create bundle.

Add below code in `webpack.config.js`

```js
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')

     plugins: [
      new CleanWebpackPlugin(),
      ...
    ],

```

Now add some garbage files in dist folder and run
`npm run build` you should see your garbage files are deleted and only types and lib files are there.

<a href="#">Go to Top</a>

🏆Commit Link https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/5f77ec0af2cf89b1e7508d14697d562a8202becb

## 📠Copy your library `package.json` to your dist folder

You should copy package.json to dist folder so that you can publish your dist folder to `npm.org`

### Step 1- Create `src\package.json` file with below code.

```js
{
    "name": "my-sample-typescript",
    "version": "1.0.0",
    "description": "My Library",
    "author": "",
    "license": "ISC"
}

```

### Step 3- Copy package.json after build

Add below webpack plugin to copy package.json file to dist.

```js

const CopyWebpackPlugin = require('copy-webpack-plugin')


plugins: [
...
        new CopyWebpackPlugin([
            {
                from: './src/package.json',
                to: '../dist/package.json'
            }
        ])
    ],

```

Now if you run the `npm run build` you should see package.json file in your dist folder

![adding package.json in dist folder image](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/313d4ba58d6ae88fc6606e549cebb16d03384eb1/z_copy%2520package.png)
<a href="#">Go to Top</a>

🏆Commit Link : https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/fc1a1cd7c240f63877957083cbe84fce72db975e

## 📝Creating Typescript documentation of your project

Read my article for detail insight https://rupeshtiwari.com/how-to-create-documentation-of-any-typescript-project/

### Step 1- Install typedoc

Run below script to install typedoc and webpack plugin for typedoc

    npm i -D typedoc-webpack-plugin typedoc

### Step 2- Update webpack.config.js

Add below code in your `webpack.config.js` file.

```js
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

   plugins: [
       ...
        new TypedocWebpackPlugin({
            out: 'docs'
        })
    ],
```

Now if you run the `npm run build` you should see docs folder created you can browse via any browser and see them. 👌

![Docs](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/0d2985547643f3e0988dcbe70d71a5fcaa10f90b/z_docsfor%2520typescript.PNG)

![Page](https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/0d2985547643f3e0988dcbe70d71a5fcaa10f90b/z_docshtml.png)

<a href="#">Go to Top</a>