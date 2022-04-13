require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/RnyO_kv08Z4Q0v_iV5n2qYyrdNyCP1Oc',
      accounts: [ 'e39a512780f3000655ee739a1521b24ff0ced13d630bdb42bb736faa327650fe' ]
    }
  }
}