#!/usr/bin/env python
# coding: utf-8

# ### Setup
# Run first `00-setup.ipynb` and select its kernel

# In[3]:


next(async()=>{
    [ethProvider] = await ethers.getSigners()
    await ethProvider.sendTransaction({to:provider._address, value:toUnit(100)})
})


# In[4]:


(/, charts, configuration)

next(async() =>{
    await $.resetRecording()
    $.resetTraces()

    $.setPeriodTrace(432000)
    
    $.addViewTrace(synthF3Long, 'totalSupply', [])
(/, $.addViewTrace(synthF3Short,, 'totalSupply',, []))

(/, $.addEventTrace(dai.web3,, 'Transfer'))
})


# In[15]:


(/, credit, mining, without, working)

next(async()=>{
    
    await $.sleepAndRecord(
        $.time(10,'days'),
        $.time(4,'hours')
    )
    
    await $.draw()
})


# In[7]:


(/, credit, mining, with, twap, change)

next(async()=>{    
    await $.resetRecording()
    
    await $.sleepAndExecute(
        $.time(5,'days'),
        $.time(12,'hours'),
        (/, make, a, big, swap, in, uniswapV3, pool, to, alter, quote)
        [{
            run: async()=>{
                    await dai.connect(provider).transfer(dai.address, toUnit(10_000_000))
            },
            every: $.time(1,'days')
         }]
    )
    
    await $.draw()
})


# In[ ]:




