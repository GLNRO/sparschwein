const Bank = artifacts.require('./Bank.sol');

contract('Bank', function(accounts) {

  let bank

  beforeEach('setup contract for tesst', async function(){
    bank = await Bank.new()
  })

  it("should have a balance initialized at zero", async function(){
    assert.equal(await bank.getBalance(), 0)
  })

  it("adding 1 eth should return a balance of 1", async function(){

  })

  it("should be initialized with an expiration date", async function(){
    
  })
});
