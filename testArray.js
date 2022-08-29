// let orignalArray = [["fun"]];

// let sliceCopy = orignalArray.slice();
// let copy2 = [...orignalArray];

// console.log(sliceCopy, copy2);

// JSON - Java Script object Notation
let car = {
	name: "Audi",
	model: "A7",
}; // Object is Key : value Pair

// console.log(car.whichModel());
// // console.log(Object.keys(car)); // It will Return Keys in Array
// console.log(Object.values(car)); // o/P

// Object.keys and Object.values --> Will return Array
// LOOPING IN OBJECT

// JSON.stringify(); // Converts JSON -> String
// JSON.parse(); // Converts STRING -> JSON
let copyCar = JSON.parse(JSON.stringify(car));
copyCar.manufactureDate = 1997;
console.log(copyCar);
console.log(car);
// for (key in car) {
// 	console.log(`${key} ${car[key]}`);
// }
