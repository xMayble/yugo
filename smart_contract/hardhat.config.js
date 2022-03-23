//https://eth-ropsten.alchemyapi.io/v2/C07Dqjl-Nk-rT97yYys-ApLoFCAAxwGL

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/C07Dqjl-Nk-rT97yYys-ApLoFCAAxwGL',
      accounts: ['1d30fa98d5712db146d762397ba905b0437fafa8c1c301d5478e73a3fa819644'],
    },
  },
};
