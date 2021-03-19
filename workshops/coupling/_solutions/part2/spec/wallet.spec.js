const test = require('../test-framework.js')
const Wallet = require('../src/wallet.js')

// test double
class BalanceDouble {
  add() {}
  total() { return "total" }
}

console.log("Wallet")
test.it("add 10 to balance", function() {
  let wallet = new Wallet(new BalanceDouble())
  test.assertEquals(wallet.add(10), "total");
})

test.it("adds 100 from balance", function() {
  let wallet = new Wallet(new BalanceDouble())
  test.assertEquals(wallet.add(100), "total");
})
