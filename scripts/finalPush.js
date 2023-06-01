const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("Chai");
  const contract = await Chai.deploy(); //Instance of contract
  await contract.deployed();
  console.log("Address of contracts", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
