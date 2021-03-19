const test = require('../test-framework.js')
const Plane = require('../src/plane.js')

console.log("Plane")
test.it("moves", function() {
  let plane = new Plane()
  test.assertEquals(plane.move(), "moved 10000m");
})
