# learn-solidity

This branch is the setup for developing the solidity using [buidler](https://buidler.dev).

## Scripts

### build

This command will compile `.sol` files and generate types definition.

```bash
npm run build
```

### test

This command will test the contracts.

**Note**: Provider should be import from `@nomiblabs/buidler`, don't use provider from `ethereum-waffle`.

```bash
npm run test
```

### linter

This command will lint `.sol`.

```bash
npm run lint
```
