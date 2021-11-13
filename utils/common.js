const contracts = require('./contracts');
const { UNISWAP_V3_ORACLE_POOL, UNISWAP_V3_ROUTER, WETH_ADDRESS } = require('./constants');
const wallet = require('./wallet');
const { toUnit } = require('./bn');
var { advanceTimeAndBlock } = require('./evm');
const { ethers, web3, artifacts } = require('hardhat');

// uniswap utils

const makeASwap = async (provider, fromToken, toToken, receiver, fee, amount) => {
  uniRouter = await ethers.getContractAt('ISwapRouter', '0xE592427A0AEce92De3Edee1F18E0157C05861564');
  token = await ethers.getContractAt('ERC20', fromToken);

  await token.connect(provider).approve(uniRouter.address, amount)

  const blockTimestamp = (await ethers.provider.getBlock('latest')).timestamp;

  return await uniRouter
    .connect(provider)
    .exactInputSingle([fromToken, toToken, fee, receiver, blockTimestamp + 100, amount, toUnit(0.0001), 0]);
};

exports.makeASwap = makeASwap;
