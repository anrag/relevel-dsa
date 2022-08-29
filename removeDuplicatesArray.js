/**
 * @description Remove Duplicates from the Array .
 */

const duplicateArray = new Array("a", "b", "a", "c", "t", "b");
const removeDuplicateValues = (duplicateArray = []) => {
	const uniqueObj = {};
	duplicateArray.map((item) => {
		// if (uniqueObj[item]) uniqueObj += 1;
		uniqueObj[item] = 0;
	});
	return uniqueObj;
};

const test = removeDuplicateValues(duplicateArray);
