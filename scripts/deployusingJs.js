
let fs = require("ethers/lib/utils")
let solc = require("hardhat")
let Web3 = require('web3')

async function main() {
    // Deploy the NFT contract
  const cryptoDevsNftAddress 
  = await deployCryptoDevsNFT();
  console.log(
    `Deployed CryptoDevsNFT contract at address: 
    ${cryptoDevsNftAddress}`
  );
    // Deploy the Fake NFT Marketplace contract
    const fakeNftMarketplaceAddress = await deployFakeNFTMarketplace();
    console.log(
      `Deployed FakeNFTMarketplace at address: ${fakeNftMarketplaceAddress}`
    );

    const cryptoDevsDaoAddress = await deployCryptoDevsDAvvv(
        cryptoDevsNftAddress,
        fakeNftMarketplaceAddress
      );

      if (process.env.ETHERSCAN_API_KEY) {
        // Verify NFT contract on Etherscan
        await run("verify:verify", {
          address: cryptoDevsNftAddress,
          constructorArguments: [MAX_NFTS],
        });
    
        // Verify Marketplace contract on Etherscan
        await run("verify:verify", {
          address: 9,
          constructorArguments: [],
        });
    
        // Verify DAO contract on Etherscan
        await run("verify:verify", {
          address: cryptoDevsDaoAddress,
          constructorArguments: [cryptoDevsNftAddress, fakeNftMarketplaceAddress],
        });
      }

 
} // main ends
// done 2
async function deployFakeNFTMarketplace() {
    const FakeNFTMarketplace = await ethers.getContractFactory(
      "FakeNFTMarketplace"
    );
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy({
      value: parseEther("0.05"),
    });
    await fakeNftMarketplace.deployed();
  
    return fakeNftMarketplace.address;
  }

 // done 1
  async function deployCryptoDevsNFT() {
    const NFT = await ethers.getContractFactory("CryptoDevsNFT");
    const cryptoDevsNFT = await NFT.deploy(MAX_NFTS);
  
    await cryptoDevsNFT.deployed();
  
    return cryptoDevsNFT.address;
  }
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });