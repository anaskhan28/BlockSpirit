// 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks:{
    Sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/rpY1cFWQuLwtK0-JuTqJMCi4-qEr6x1L' ,
      accounts:['2603003a40bd4d7cebc2c5add66ce62c98433cde006cbfbfd93d4293b2e75c9e']
    }

  }
}