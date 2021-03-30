class Checkout {
  constructor (items) {
    this.items = items
  }

  total () {
    return this.items.reduce((a, b) => a + b.price, 0)
  }
}

module.exports = Checkout
