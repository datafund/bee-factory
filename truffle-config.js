module.exports = {

  networks: {
    development: {
      host: "swarm-test-blockchain",
      port: 9545,
      network_id: "4020",
      gasPrice: "10000000000", //10 gwei
    }
  },

  compilers: {
    solc: {
      version: "0.8.1",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        },
        evmVersion: "istanbul"
      }
    }
  },

  db: {
    enabled: true
  }
};
