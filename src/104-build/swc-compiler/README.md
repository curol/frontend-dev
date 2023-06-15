# SWC Compile

SWC is an extensible Rust-based platform for the next generation of fast developer tools. It's used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, and more.

SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.

SWC is designed to be extensible. Currently, there is support for:

- Compilation
- Bundling (swcpack, under development)
- Minification
- Transforming with WebAssembly
- Usage inside webpack (swc-loader)
- Improving Jest performance (@swc/jest)
- Custom Plugins

## Usage

### Transpile

Run transpile example script

```
pnpm transpile
```

### Bundle

Transpile and bundle code

```
pnpm bundle
```
