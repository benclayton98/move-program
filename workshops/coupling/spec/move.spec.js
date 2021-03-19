const test = require('../test-framework.js')
const move = require('../src/move.js')

const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');

console.log("move()")
test.it("Skateboard", function() {
  test.assertEquals(move(new Skateboard()), "moved 100m");
})

test.it("Car", function() {
  test.assertEquals(move(new Car()), "moved 1000m");
})

test.it("Plane", function() {
  test.assertEquals(move(new Plane()), "moved 10000m");
})

test.it("SpaceShip", function() {
  test.assertEquals(move(new SpaceShip()), "moved 100000m");
})
