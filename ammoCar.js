function AmmoCar() {
  this.x = 20; // x position on the plane
  this.y = 50; // y position on the plane
  this.r = 5;
  this.drivingDistance = 0; // the increment instance for the ammoCar
  this.driving = false; // determine if the ammoCar is driving


  this.ammos = []; // the number of ammos currently in the ammo car

  this.loadAmmo = function(ammo) {
    this.ammos.push(ammo);
  }
  this.loadAmmos = function(ammos) {
    this.ammos = ammos;
  }

  this.dischargeAmmo = function(ammos) {
    canon.loadAmmos(this.ammos);
    this.drivingDistance = -5;
    this.driving = true;
    this.ammos = []; // set the ammos as empty
  }

  this.move = function() {
    if (this.driving) {
      this.x = this.x + this.drivingDistance;
      if (this.x === 20 || this.x === canon.x) {
        this.driving = false;
      }

      if (this.x === canon.x) {
        this.dischargeAmmo();
      }
    }
  }
  
  this.show = function() {
    beginShape();
      fill(255, 0, 204);
      noStroke();
      ellipse(this.x, this.y, this.r*2, this.r*2);
    endShape(CLOSE);
    if (this.ammos.length > 0) {
      d = 0;
      for (i = 0; i < this.ammos.length; i++) {
        d += 4
        this.ammos[i].show();
        this.ammos[i].move(ammoCar.x + d + i, ammoCar.y + 15);
      }
    }
  }
}
