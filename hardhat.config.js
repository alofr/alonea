require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      // Jaringan lokal untuk pengujian
    },
    // Contoh untuk Sepolia Testnet
    sepolia: {
      url: process.env.RPC_URL_TESTNET, // Ambil dari file .env
      accounts: [process.env.PRIVATE_KEY] // Ambil dari file .env
    },
    // Contoh untuk Ethereum Mainnet
    mainnet: {
      url: process.env.RPC_URL_MAINNET, // Ambil dari file .env
      accounts: [process.env.PRIVATE_KEY] // Ambil dari file .env
    }
  },
  etherscan: {
    // Kunci API untuk verifikasi kontrak secara otomatis (opsional)
    // Daftar di https://etherscan.io/ atau https://sepolia.etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY 
  }
};
