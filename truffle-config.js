module.exports = {
  networks: {
    ganache: {
      host: "localhost", 
      port: 7545,
      gas: 5000000,
      network_id: "*" // Match any network id
    }
  },

  mocha: {
    
  },
  compilers: {
    solc: {
      version: "0.8.10",    
 
    }
  },


// config file
