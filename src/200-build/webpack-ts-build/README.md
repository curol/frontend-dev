# TypeScript Project References Demo

This repo is forked from https://github.com/RyanCavanaugh/project-references-demo, which is a repo to demonstrate the use of project references in TypeScript.  It has been extended to show how project references can be used in a project using the following:

* TypeScript
* Webpack
* ts-loader
* yarn workspaces

This repo is described in the article [here](/REFERENCES.md).

For more information on Webpack & TS builds:
- [Using webpack and typescript](https://blog.logrocket.com/using-webpack-typescript/)

## Webpack loaders

By default, webpack only understands JavaScript files, treating every imported file as a module. webpack cannot compile or bundle non-JavaScript files, therefore, it uses a loader.

Loaders tell webpack how to compile and bundle static assets. They are used for compiling TypeScript modules into JavaScript, handling application styles, and even linting your code with ESLint.

A few webpack loaders include ts-loader, css-loader, style-loader, and more; we’ll discuss them later in this tutorial.

## Installation
```
yarn install
```

## Running
```
yarn start
```
Go to localhost:8080 in your browser to view the output. Edit files in the <code>packages</code> to see the changes in the browser.