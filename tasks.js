let Tasks = {
  shoot: function(x, y) {
    // TODO Figure out the mechanics for targeting where to shoot to 
    canon.shoot(3, x, y);
  },
  repair: function(x, y, r) {
    // TODO create a function to repair a certain place with x and y and radius of where to repair
  },
  loadAmmo: function(num, impact) {
    if (ammosBank && ammosBank - num > 0) {
      let pos = int(dist(ammoHoist.x, ammoHoist.y, ammoCar.x, ammoCar.y));
      if (pos <= 20) {
        let d = 0;
        let ammos = Array(num).fill(null).map((_, idx) => {
          d += 4;
          return new Ammo(ammoCar.x + d + idx, ammoCar.y + 15, impact);
        });
        ammoCar.loadAmmos(ammos);
        setTimeout(function () {
          ammoCarDriver.performTask(ammoHoist.x, ammoHoist.y)
        }, 100);
      } else {
        ammoCarDriver.performTask(ammoHoist.x, ammoHoist.y);
      }
      ammosBank -= num;
    }
  },
  driveAmmoCar: function(x, y) {
    let pos = int(dist(ammoHoist.x, ammoHoist.y, ammoCar.x, ammoCar.y));
    if (pos <= 20) {
      ammoCar.drivingDistance = 5;
    } else {
      ammoCar.drivingDistance = -5;
    }
    ammoCar.driving = true;
  },
  carryBody: function(x, y, r) {
    // TODO carry all the dead body thats present in a particular direction and radius
  },
  operateValve: function() {
    // TODO generate mechanics to operate the valve in continous loop
  },
  refuelBoiler: function() {
    // TODO refuel the boiler if the value gets too low and moderate if too high
  },
  aiming: function() {
    // TODO aim the gondola to a position of the enemy to target
  },
  controlReactor: function() {
    // TODO write the operations to control the reactor
  }
}
