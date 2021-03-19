const test = require('../test-framework.js')
const move = require('../src/move.js')

// test double
class TestVehicle {
  move() {
    return "moved some distance"
  }
}

console.log("move()")
test.it("moves a vehicle", function() {
  test.assertEquals(move(new TestVehicle()), "moved some distance");
})
