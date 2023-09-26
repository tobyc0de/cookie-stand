function Car(make, model, topSpeed, colour) {
  this.make = make;
  this.model = model;
  this.topSpeed = topSpeed;
  this.color = colour;
}

const timsCar = new Car("Suzuki", "Grand Vitara", "75mph", "Red");
const tobysCar = new Car("Ford", "Focus", "20mph", "black");

Car.prototype.render = function () {
  document.getElementById("renderhere").textContent += this.make;
  return this.make;
};

timsCar.render();
tobysCar.render();
