# Loglifter

## CLI Commands

- `yarn`: Installs dependencies

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Pass TypeScript files using ESLint

- `yarn test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## React aliases

Problem: some component wants to load react, but does not find it - the npm package is not found.

Solution: npm aliases pointing to preact. I forgot to log the exact commands. This is in package.json

    {"react": "npm:@preact/compat@^17.1.2",
     "react-dom": "npm:@preact/compat@^17.1.2"}

Problem: the component finds react, but CJS/MJS is all messed up. Possibly both
versions are in the tree? Anyway, the error is that a property "\_\_\_H" can not be found.

Solution: fix the Cjs/Mjs mess. Solution from https://github.com/vitest-dev/vitest/issues/1652
See vite.confit.ts
