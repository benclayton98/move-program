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
    let clientMock = {
      messages: {
        create() {}
      }
    }
    let message = new Message(clientMock)
    spyOn(clientMock.messages, 'create') //.and.returnValue(Promise.resolve({sid: ''}))

    message.send(checkout.total())

    expect(clientMock.messages.create).toHaveBeenCalledWith({
       body: `Your total is 7`,
       from: process.env.TWILIO_UK_NUMBER,
       to: process.env.PERSONAL_NUMBER
     })
  })
})
