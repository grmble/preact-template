# Loglifter

## CLI Commands

- `pnpm`: Installs dependencies

- `pnpm dev`: Run a development, HMR server

- `pnpm serve`: Run a production-like server

- `pnpm build`: Production-ready build

- `pnpm lint`: Pass TypeScript files using ESLint

- `pnpm test`: Run Jest and Enzyme with
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

## Form Libraries

Candidates are

- React Hook Form: uncontrolled inputs, good documentation, lots of examples
- Final Form: controlled inputs, docs not quite as good, not quite as many examples

Both are easy to use. I find Final Form easier to abstract little components out,
with React Hook Form the types get very unwieldy.

## Visual Code Plugins

- eslint
- prettier
- tailwind css intellisense

## Branches

The branches in this example repo are:

- `xState`: Bulma navbar, XState with demo for input validation. It does work, but heavy solution,
  and combining multiple inputs gets tedious
- `bulma`: Bulma navbar, React Hook Forms and Final Form example, also in Bulma. Bulma is nice,
  I am very productive with it, but it is around 200kb of css (uncompressed, but still)
- `master`: Tailwindcss with Navbar. A bit more fiddly, but more powerful. Css bundle size VERY small.
