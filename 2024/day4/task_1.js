let fs = require("fs");

const day1task1 = () => {
	let row = fs.readFileSync("2024/day3/data.txt", "utf8").split("\n");;
	//nums.pop() //  remove empty line
	console.log("nums", row);



	// console.log("count", count);
};

module.exports = day1task1;
