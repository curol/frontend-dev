/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  verbose: true,
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\\/]+$", "/node_modules/.pnpm", "/dist/", "/.vscode/"],
  transform: { 
    '^.+\\.ts?$': 'ts-jest',
   }
};