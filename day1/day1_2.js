let fs = require("fs");
const day1task2 = (message, currentFile) => {
	let nums = fs.readFileSync("day1/data.txt", "utf8").split("\n").map(n=>parseInt(n,10));
	let result = 0;
	let arr = [];
	console.log("nums", nums);
	console.log("nums", nums[10]);

	nums.forEach((item, index) => {
		let arrIndex = index - 2;
		if (arrIndex >= 0 && arrIndex < nums.length-3) {
		var deep = {
			index: arrIndex ,
			sum: item + nums[index - 1] + nums[index - 2]
		};
		arr.push(deep);
		if ( arr[arrIndex-1] && arr[arrIndex].sum - arr[arrIndex-1].sum > 0 ) {
			result++;
		}
		}
	});
	console.log("1 day 2 task \n arr", arr);
	console.log("1 day 2 task \n result", result);
};
module.exports = day1task2;


// (You guessed 1161.) result 1217