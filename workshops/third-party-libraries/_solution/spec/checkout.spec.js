const Checkout = require('../src/checkout.js')

describe('Checkout', function() {
  let items, checkout
  beforeEach(function() {
    items = [
      { price: 1 },
      { price: 1 },
      { price: 2 },
      { price: 3 },
    ]
    checkout = new Checkout(items)
  })
  it('totals the items', function() {
    expect(checkout.total()).toEqual(7)
  })
})
