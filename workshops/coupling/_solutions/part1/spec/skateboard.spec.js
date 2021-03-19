const test = require('../test-framework.js')
const Skateboard = require('../src/skateboard.js')

console.log("Skateboard")
test.it("moves", function() {
  let skateboard = new Skateboard()
  test.assertEquals(skateboard.move(), "moved 100m");
})
