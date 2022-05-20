//https://cdnjs.cloudflare.com/ajax/libs/web3/1.5.0/web3.min.js


const tokenSymbol = 'Yugo';
const tokenAddress = '0x870DB2e6b2046b544BcCB5Ac23A4f2989fA2314D';
const tokenImage = '';
const tokenDecimals = 18;


export async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Added Sucessfully!');
  } else {
    console.log('Yugo Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}