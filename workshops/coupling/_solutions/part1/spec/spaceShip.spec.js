const test = require('../test-framework.js')
const SpaceShip = require('../src/spaceShip.js')

console.log("SpaceShip")
test.it("moves", function() {
  let spaceShip = new SpaceShip()
  test.assertEquals(spaceShip.move(), "moved 100000m");
})
