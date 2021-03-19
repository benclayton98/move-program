const test = require('../test-framework.js')
const Wallet = require('../src/wallet.js')

console.log("Wallet")
test.it("add 10 to balance", function() {
  let wallet = new Wallet()
  test.assertEquals(wallet.add(10), 110);
})

test.it("adds 100 from balance", function() {
  let wallet = new Wallet()
  test.assertEquals(wallet.add(100), 200);
})
