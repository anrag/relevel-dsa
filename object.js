// HOW TO DEFINE OBJECT START

const car = {}; // {} deontes Object

const car = new Object();

const car = Object.create();

function Car(brand, model) {
	this.brand = brand;
	this.model = model;
}

const myCar = new Car("Ford", "Fiesta");
myCar.brand; //'Ford'
myCar.model; //'Fiesta'

// HOW TO DEFINE OBJECT END

// FOR LOOPS START

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
	console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// FOR LOOP END

// GET KEYS IN ARRAY START
const object1 = {
	a: "somestring",
	b: 42,
	c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// GET KEYS IN ARRAY END

// Objects are always passed by reference.

// car.brand.name or car['brand']['name']

// Inheritance

class Person {
	hello() {
		return "Hello, I am a Person";
	}
}

class Programmer extends Person {
	hello() {
		return super.hello() + ". I am also a programmer.";
	}
}

const flavio = new Programmer();
flavio.hello();
