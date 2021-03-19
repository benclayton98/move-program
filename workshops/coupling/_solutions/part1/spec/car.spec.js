const test = require('../test-framework.js')
const Car = require('../src/car.js')

console.log("Car")
test.it("moves", function() {
  let car = new Car()
  test.assertEquals(car.move(), "moved 1000m");
})
