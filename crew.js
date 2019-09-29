// Create a crew member and functionalities
function Crew(x, y, task, fixedDesignation = false) {
  this.x = x; // location x
  this.y = y; // location y
  this.task = task; // tasks the crew is assigned to do
  this.fixedDesignation = fixedDesignation; // determine if the crew can change position
  this.isDead = false; // determine if the crew member is dead or not
  this.isBusy = false; // Flag to know if the crew is currently performing task

  // show the crew member in the plane
  this.show = function() {
    beginShape();
      fill(180);
      noStroke();
      rect(this.x, this.y, 10, 10);
    endShape(CLOSE);
  }

  this.move = function(x, y, z) {
    // TODO animate and move the crew member from current position to the new position
  }

  this.changeTask = function(task) {
    // If the crew is not dead then it can perform operation 
    if (!this.isDead) {
      if (!this.fixedDesignation) {
        this.task = task;
      }
    }
  }

  this.performTask = function(...args) {
    if (!this.isDead && this.task) {
      let crewTask = Tasks[this.task];
      if (crewTask) {
        this.isBusy = true;
        crewTask(...args);
        this.isBusy = false;
      }
    }
  }

  this.remove = function() {
    if (this.isDead) {
      // TODO carry the crew away from the direction of the canon
    }
  }
}