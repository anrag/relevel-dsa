/**
 * @description Count the occurence of character in string
 */
let rawString = "OCCURENCE";
let charString = rawString.split("");

const countFrequencyOfString = (rawString) => {
	let obj = {};
	let charString = rawString.split("");
	charString.map((item) => {
		if (obj[item]) {
			obj[item] += 1;
		} else {
			obj[item] = 1;
		}
	});

	for ([key, value] of Object.entries(obj)) {
		console.log(`${key} Occured ${value} ${value == 1 ? "time" : "times"}`);
	}
	return obj;
};

let rawObject = countFrequencyOfString(rawString);
