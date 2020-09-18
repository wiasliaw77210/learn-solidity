import {
  usePlugin,
  BuidlerConfig,
} from '@nomiclabs/buidler/config';

usePlugin('@nomiclabs/buidler-waffle');

const Config: BuidlerConfig = {
  // network
  defaultNetwork: 'buidlerevm',

  networks: {
    rinkeby: {
      url: '',
    },
    kovan: {
      url: '',
    },
    coverage: {
      url: "http://127.0.0.1:8545",
    },
  },

  // solidity compiler
  solc: {
    version: '0.5.8',
  },

  // repo path
  paths: {
    sources: './src',
    tests: './test',
    artifacts: './dist/abi',
  },
};

export default Config;
