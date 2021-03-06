require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/dc9af049e5004034a4c18e6401034479',
      accounts: [process.env.RINKEBY_MNEMONIC],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.LOCAL_MNEMONIC],
      chainId: 1337
    },
    hardhat: {
      chainId: 31337
    },
  },
};
