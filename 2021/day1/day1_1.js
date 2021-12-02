let fs = require("fs");

const day1task1 = () => {
	let result = 0;
	let nums = fs.readFileSync("2021/day1/data.txt", "utf8").split("\n");

	nums.forEach((item, index) => {
		if (index === 0) { return }
		if (parseInt(item) > parseInt(nums[index - 1])) {
			result++;
		}
	});
	console.log("1 day 1 task \n result", result);
};
module.exports = day1task1;
