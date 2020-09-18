import { ethers } from '@nomiclabs/buidler';
import { deployContract, solidity } from 'ethereum-waffle';
import chai from 'chai';

import SimpleStorageJSON from '../dist/abi/SimpleStorage.json';
import { SimpleStorage as TSimpleStorage } from '../dist/typings/SimpleStorage';

chai.use(solidity);

describe('SimpleStorage', async () => {
  let Contract: TSimpleStorage;

  beforeEach(async () => {
    const signers = await ethers.getSigners();

    Contract = await deployContract(
      signers[0],
      SimpleStorageJSON
    ) as TSimpleStorage;
  });

  it('initial value should be 0', async () => {
    const initVal = await Contract.get();
    chai.expect(initVal).to.eq(0);
    chai.expect(Contract.address).to.properAddress;
  });

  it('set storedData should be 10', async () => {
    await Contract.set(10);
    chai.expect(await Contract.get()).to.eq(10);
    chai.expect(Contract.address).to.properAddress;
  });
});
