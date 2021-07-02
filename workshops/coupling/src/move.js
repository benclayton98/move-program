const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');

/*const move = (vehicle) => {
  if (vehicle instanceof Skateboard) {
    return "moved 100m";
  }

  if (vehicle instanceof Car) {
    return "moved 1000m";
  }

  if (vehicle instanceof Plane) {
    return "moved 10000m";
  }
}*/

class Move{
    constructor(vehicle){
      this.vehicle = vehicle;
    }

    skateboard(vehicle){
      return 'moved 100m';
    }
    
    car(vehicle){
      return 'moved 1000m'
    }
    
    plane(vehicle){
      return 'moved 10000m'
    }

    spaceship(vehicle){
      return 'moved 100000m'
    }
}

const move = new Move()


//console.log(move.skateboard());

module.exports = Move;
