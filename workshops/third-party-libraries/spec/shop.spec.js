const Checkout = require('../src/checkout.js')
const Message = require('../src/message.js')

describe('Checkout sends a message', function() {
  it('', function() {
    let items = [
      { price: 1 },
      { price: 1 },
      { price: 2 },
      { price: 3 },
    ]
    let checkout = new Checkout(items)

    // create a mock for the client
    // create a message instance

    message.send(checkout.total())

    // expect that create() has been called with the right data
  })
})
