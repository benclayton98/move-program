const test = require('../test-framework.js')
const Balance = require('../src/balance.js')

console.log("Balance#")

test.it("starts with 0 by default", function() {
  let balance = new Balance()
  test.assertEquals(balance.total(), 0);
})

test.it("can start with a balance", function() {
  let balance = new Balance(10)
  test.assertEquals(balance.total(), 10);
})

test.it("can add 10 money", function() {
  let balance = new Balance()

  test.assertEquals(balance.add(10).length, 2);
})

test.it("can add 10 money", function() {
  let balance = new Balance()

  test.assertEquals(balance.add(10).includes(10), true);
})

test.it("can add 10 money", function() {
  let balance = new Balance()
  balance.add(10)
  test.assertEquals(balance.total(), 10);
})
