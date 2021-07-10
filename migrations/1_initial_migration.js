const Shares = artifacts.require('Shares');
const SharesToken = artifacts.require('SharesToken');

const MasterChef = artifacts.require('MasterChef');

dev = "0xBf7f015Db6B89cF4B15960E53b055770a4a6debe";
fee = "0x47B69a3474A51F2f6a21A65af8D781B1E0ADA85f";
owner = "0x6b54fbcafA1E4824a6Ba004208fFe5FB8acCcfE8";

startBlock = 6504000;

module.exports = async function (deployer) {
	  await deployer.deploy(Fuse,GenNFT.address)

  await (await Fuse.deployed()).transferOwnership(owner);
};
