const { ethers, upgrades } = require("hardhat");

async function main() {
  // Alamat yang akan menerima total supply awal
  // Dalam praktiknya, ini akan menjadi alamat dari PRIVATE_KEY di .env
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Mendapatkan factory kontrak MyToken
  const MyToken = await ethers.getContractFactory("MyToken");

  // Melakukan deploy dengan pola proxy
  // Argumen kedua adalah array yang berisi argumen untuk fungsi `initialize`
  const myToken = await upgrades.deployProxy(MyToken, [deployer.address], { initializer: "initialize" });

  // Menunggu hingga deploy selesai
  await myToken.deployed();

  console.log("MyToken (Proxy) deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
