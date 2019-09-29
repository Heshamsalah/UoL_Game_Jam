let ammoHoist;
let ammoCar;
let canon;
let hoistingManager;
let ammoCarDriver;
let ammosBank = 200;

function setup() {
  createCanvas(600, 600);
  ammoHoist = new AmmoHoist();
  ammoCar = new AmmoCar();
  canon = new Canon();
  hoistingManager = new Crew(15, 12, 'loadAmmo')
  ammoCarDriver = new Crew(15, 12, 'driveAmmoCar')
}

function draw() {
  background(0)
  ammoHoist.show();
  ammoCar.show();
  ammoCar.move();
  canon.show();
  hoistingManager.show();
}

function keyPressed() {
  hoistingManager.performTask(5, 1);
}

function mousePressed() {
  canon.shoot(1);
}