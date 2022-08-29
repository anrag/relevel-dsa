// Buy and sell Stock
// LEET CODE 121
/**
 *  Case - 1 Prices is always decresing we will get loss
 *  Case - 2 Prices are always increasing we will get Profite Always
 *  Case -3 Prices Jump from loss to gain and gain to Loss
 */

/**
 * Steps to Slove this
 * step 1 - Buy Stock on first Day
 * Step 2 - Sell Stock if n + 1 day is Loss
 * step 3 - Buy Again on next day,
 * @param {*} arr
 */
function MaxProfit(arr = []) {
	// console.time("EXECUTED_TIME");
	// let totalProfit = arr[0];

	// for (let i = 1; i < arr.length; i++) {
	//   if (arr[i] > arr[i - 1]) {
	//     totalProfit = totalProfit + (arr[i] - arr[i - 1]);
	//   }
	// }
	// console.timeEnd("EXECUTED_TIME");
	// console.log(totalProfit - arr[0]);

	/**
	 * Step 1 Buy when price is least
	 * Step 2 Sell one day before when price is decreasing
	 */
	/**
	 * Find the value before increasing
	 */

	/**
	 * Steps
	 * 1 - Buy Stock when Price is LEAST
	 * 2 - Sell Stock when Profit is MOST
	 */
	let totalProfit = 0;
	let buyPrice = arr[0]; // MinSoFar Value in Array
	// Buy Loop
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] < arr[i] && arr[i + 1] < buyPrice) {
			buyPrice = arr[i + 1]; // Buy Stock when Price is LEAST
		}

		if (totalProfit < arr[i + 1] - buyPrice) {
			totalProfit = arr[i + 1] - buyPrice; // Sell Stock when Profit is MOST
		}
	}
	return totalProfit;
}

let stockPrice = [7, 1, 5, 3, 6, 4];

MaxProfit(stockPrice);
