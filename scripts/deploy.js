const hre = require("hardhat");

async function main() {
  const simpleContract = await hre.ethers.deployContract("SimpleContract", ["Simple contract"]);
  await simpleContract.waitForDeployment();

  console.log(`SimpleContract deployed to ${simpleContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});