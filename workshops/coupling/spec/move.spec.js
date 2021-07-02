const test = require('../test-framework.js')
let move = require('../src/move.js')

const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');
const Move = require('../src/move.js');


console.log('move')
test.it("Skateboard", function() {
  move = new Move();
  test.assertEquals(move.skateboard(), "moved 100m");
})

test.it("Car", function() {
  move = new Move();
  test.assertEquals(move.car(), "moved 1000m");
})

test.it("Plane", function() {
  move = new Move();
  test.assertEquals(move.plane(), "moved 10000m");
})

test.it("SpaceShip", function() {
  test.assertEquals(move(new SpaceShip()), "moved 100000m");
})
