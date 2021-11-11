// import dependencies
var {smock} = require('@defi-wonderland/smock')

var moment = require('moment')
var { constants } = require('../utils')
var { advanceTimeAndBlock } = require('../utils/evm')
var { evm, common, contracts } = require('../utils');
var { toUnit } = require('../utils/bn')
var { getLatestBlockTimestamp, getBlockTimestamp } = require('../utils/evm')
var { next, clear, bnToNumber } = require('../utils/jupyter')
var { Notebook } = require('../utils/notebook')
var { ethers } = require('hardhat')

var $ = new Notebook();

clear();

// console.log(smocklib.smock)

// setup tools and contracts

next(async () => {
    await $.setup(constants.FORK_BLOCK_NUMBER);
    
    provider = await $.impersonate(constants.RICH_DAI_ADDRESS);
    
    // contract artifacts
    ls = await $.fetch('LongShort', constants.LONG_SHORT_ADDRESS)
    synthF3Long = await $.fetch('SyntheticToken', constants.SYNTHETIC_TOKEN_ADDRESS_F3_LONG)
    synthF3Short = await $.fetch('SyntheticToken',constants.SYNTHETIC_TOKEN_ADDRESS_F3_SHORT)
    ym = await $.fetch('YieldManagerAave', constants.YIELD_MANAGER_ADDRESS)
    oracleManager = await $.fetch('OracleManagerFlippening_V0', constants.ORACLE_MANAGER_ADDRESS_F3)
    alphaFLT = await $.fetch('AlphaTestFLT',constants.ALPHA_FLT_ADDRESS)
    treasury = await $.fetch('TreasuryAlpha',constants.TREASURY_ALPHA_ADDRESS)
    
    dai = await $.fetch('ERC20', constants.DAI_ADDRESS )
    
    // fake contracts
    oracleManagerFake = await smock.fake('OracleManagerFlippening_V0');
    // update the address of the oracle manager to whatever the address of the fake is.
    // might have to make myself admin in order to do this.
    longShortFake = await smock.fake('LongShort');
});

//updating the address of the oracle manager to the fake oracleManager contract
next(async()=>{
    ls.connect(await $.impersonate('0xcfcCB5e6b3882b7795eb1B1A9f18831A842d4eE0')).updateMarketOracle(1,oracleManagerFake.address)    
})

//Checking total supply of long F3 
synthF3Long.totalSupply()
/0x1b78e92b78118e7a5d6b/10**18

//Approving transaction for the user
dai.connect(provider).approve(ls.address,200000000000)

//Mint long next price for user in F3 market
next(async()=>{
    ls.connect(provider).mintLongNextPrice(await synthF3Long.marketIndex(),200000000000)           
           })


ls.userNextPrice_paymentToken_depositAmount(1,true,constants.RICH_DAI_ADDRESS)

 0x8bb2c97000 / 10**18

// ls.userNextPrice_currentUpdateIndex(1,constants.RICH_DAI_ADDRESS)

next(async()=>{
    tx = await ls.updateSystemState(1)
    waited = await tx.wait()
})

oracleManagerFake.updatePrice.getCall(1)

//Forcing an oracle price update for next price execution to go through
oracleManagerFake.updatePrice.returns('42000000000000000000')

oracleManagerFake.connect(provider).updatePrice()

//Running next price execution for the user
ls.executeOutstandingNextPriceSettlementsUser(constants.RICH_DAI_ADDRESS,1)

// balance of synthetic tokens for the user
synthF3Long.balanceOf(constants.RICH_DAI_ADDRESS)

// 0x63b81c6692 /10**18

oracleManagerFake.connect(provider).updatePrice()

oracleManager.getLatestPrice()

0x023d393ebf869096a4 / 10**18

// oracleManagerFake.getLatestPrice()

oracleManager.updatePrice()

//Checking total supply of long F3 
synthF3Long.totalSupply()

//Checking total supply of alphaFLT
alphaFLT.totalSupply()

//Checking market value of long F3
ls.marketSideValueInPaymentToken(1,true)

(0x18b78f7dfa2132fb774a - 0x19a85a883fc741ab8afc) / 10**18

//Checking market value of short F3
ls.marketSideValueInPaymentToken(1,false)
0x12a2debba8d1573adcb2 / 10**18

 (0x12a2def41f9b98800525 - 0x12af0cfc6353d5789fca) / 10**18

treasury.paymentToken()

longShortFake.marketUpdateIndex.returns(3690)

longShortFake.marketUpdateIndex(2)
