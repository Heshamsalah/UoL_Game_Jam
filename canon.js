function Canon() {
  this.x = 500;
  this.y = 30;
  this.r = 10;

  this.ammos = [];
  this.lastShoot = 0;

  this.loadAmmos = function(ammos) {
    this.ammos = [...this.ammos, ...ammos];
    this.lastShoot = 0;
    d = 0;
    for (i = 0; i < this.ammos.length; i++) {
      d += 4
      this.ammos[i].move(this.x - 15 + d + i, this.y - 15)
    }
  }

  this.shoot = function(noOfAmmo, x, y) {
    if (this.ammos.length > 0) {
      // TODO Rework the shooting mechanics
      let arrSlice = this.ammos.slice(this.lastShoot, noOfAmmo + this.lastShoot);
      for (i = 0; i < arrSlice.length; i++) {
        this.ammos[this.lastShoot + i].shooting = true;
      }
      this.lastShoot += noOfAmmo;
    } else {
      // TODO show notification when of out of ammo and call for load ammo
    }
  }

  this.show = function() {
    beginShape();
      fill(240, 0, 0, 134);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    endShape(CLOSE);
    if (this.ammos.length > 0) {
      d = 0;
      for (i = 0; i < this.ammos.length; i++) {
        d += 4
        this.ammos[i].show();
        this.ammos[i].shoot();
      }
    }
  }
}