class Car{
	constructor(make, model) {
    this.make = make;
    this.model = model;
	}
}

Car.prototype.getMakeModel = function(){
	return `${this.make} ${this.model}`;
}

class SportsCar{
		constructor(make, model, topSpeed) {
	    super(make, model);
	    this.topSpeed = topSpeed;
	}
}

SportsCar.prototype.getTopSpeed = function(){
	return this.topSpeed;
}


// SportsCar.prototype = Object.create(Car.prototype);

// SportsCar.prototype.constructor = SportsCar;

// SportsCar.prototype.getTopSpeed = function() {
//     return this.topSpeed;
// };


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
