//const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const objSalad = {};
const salad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");
salad[0]; // '🍅'
salad[2]; // '🥦'
salad[5]; // '🥕'

salad.length; // get size of the array  7 here

// Looping the elements
let i = 0;
// for (; i < salad.length; ) {
// 	console.log(`Element at index ${i} is ${salad[i]}`);
// 	i++;
// }

salad.push("LAST"); // Add Element to the Array
// If you want to add an element to the beginning of
// the array, you'll need to use the unshift() method.

salad.unshift("FIRST"); // think seating arrangement
// console.log(salad);

salad.pop(); // 🥑 // Remove Last Element of the Array
salad.shift(); // 🍅 // Remove First Element from the Array

// PUSH & POP will put and delete element from last
// Unshift and shift delete element from start

// You can copy and clone an array to a new array using the slice() method.
//  Note that the slice() method doesn't change the original array.
//   Instead, it creates a new shallow copy of the original array.
const saladCopy = salad.slice();
console.log(salad, "LINE NUMBER 34");
saladCopy.push("Apple");
console.log(saladCopy, "LINE NUMBER 36");
console.log(salad, "LINE NUMBER 37");

// HOW TO CHECK THE ARRAY
Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // returns true
Array.isArray("🍅"); // returns false
Array.isArray({ tomato: "🍅" }); // returns false
Array.isArray([]); // returns true
Array.isArray(salad); // returns true
let iss = Array.isArray(salad); // returns flase
console.log(iss);
return;
// DESTRUCTUE IN ARRAY

let [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];

console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

//How to Assign a Default Value to a Variable

let [tomato2, mushroom2 = "🍄"] = ["🍅", "help"];
console.log(tomato2); // '🍅'
console.log(mushroom2); // '🍄'

// How to Skip a Value in an Array

let [tomato3, , carrot3] = ["🍅", "🍄", "🥕"];

console.log(tomato3); // '🍅'
console.log(carrot3); // '🥕'

let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];

const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot1 = veg[2]; // returns '🥕'

//  2- MERGING OF THE Array
const emotion = ["🙂", "😔"];
const veggies = ["🥦", "🥒", "🌽", "🥕"];
const emotionalVeggies = [...emotion, ...veggies]; //... Spread, Rest
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]

// push() – Insert an element at the end of the array.
// unshift() – Insert an element at the beginning of the array.
// pop() – Remove an element from the end of the array.
// shift() – Remove an element from the beginning of the array.
// slice() – Create a shallow copy of an array.
// Array.isArray() – Determine if a value is an array.
// length – Determine the size of an array.

const emotions = ["🙂", "😍", "🙄", "😟"];

const joined = emotions.join(); // JOIN THE ELEMENT AS STRING
console.log(joined); // "🙂,😍,🙄,😟"

const joinedWithChar = emotions.join("<=>");
console.log(joinedWithChar); // "🙂<=>😍<=>🙄<=>😟"

// FILL ARRAY WITH SAME VALUE
const colors = ["red", "blue", "green"];

colors.fill("pink");
console.log(colors); // ["pink", "pink", "pink"]

// check value exists or not in the array
const names = ["tom", "alex", "bob", "john"];

names.includes("tom"); // returns true
names.includes("july"); // returns false

// INDEX OF - CHECK IF ELEMENT EXISTS ON WHAT POSITION OR NOT
const namesList = ["tom", "alex", "bob", "john"];

namesList.indexOf("alex"); // returns 1
namesList.indexOf("rob"); // returns -1 // becuase its not present

// In the example below, we are adding an element zack at the index 1 without deleting any elements.
const namesListt = ["tom", "alex", "bob"];

namesListt.splice(1, 0, "zack");

console.log(namesListt); // ["tom", "zack", "alex", "bob"]
