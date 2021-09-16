import { expect } from 'chai'
import hre from 'hardhat'
import "@nomiclabs/hardhat-ethers"
import { Greeter, Greeter__factory } from '../typechain';

describe("Greeter Contract Tests", function () {
  it("Should return the new greeting once it's changed", async function () {
    const HelloWorld = await hre.ethers.getContractFactory("Greeter") as Greeter__factory;
    const greeter = await HelloWorld.deploy("Hello World!") as Greeter;
    expect(await greeter.greet()).to.equal("Hello World!");
    const setGreetingTx = await greeter.setGreeting("Olá mundo!");
    await setGreetingTx.wait();
    expect(await greeter.greet()).to.equal("Olá mundo!")
  });
});
