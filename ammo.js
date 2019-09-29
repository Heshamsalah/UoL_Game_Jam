function Ammo(x, y, impact = 1) {
  this.x = x;
  this.y = y;
  this.r = 2;
  this.impactStatus = impact; // the range of impact the ammo has on the target
  this.shooting = false;

  this.shoot = function () {
    // TODO Implement a target option to this
    if (this.shooting && this.x < 600) {
      this.x = this.x + 5;
    } else {
      this.shooting = false;
    }
  }
  this.show = function() {
    beginShape();
      fill(255);
      noStroke();
      ellipse(this.x, this.y, this.r * this.impactStatus, this.r * this.impactStatus);
    endShape(CLOSE);
  }

  this.move = function (x, y) {
    this.x = x;
    this.y = y;
  }
}