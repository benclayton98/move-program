const Checkout = require('../src/checkout.js')
const Message = require('../src/message.js')

let items = [
  { price: 1 },
  { price: 1 },
  { price: 2 },
  { price: 3 },
]
let checkout = new Checkout(items)
let message = new Message()

message.send(checkout.total())
