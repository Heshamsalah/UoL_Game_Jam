let teams = [];

function AmmoHoist() {
  this.x = 20;
  this.y = 30;
  this.r = 5;

  this.show = function() {
    beginShape();
      fill(255, 204, 0);
      noStroke();
      ellipse(this.x, this.y, this.r*2, this.r*2);
    endShape(CLOSE);
  }
}
