let fs = require("fs");

const day1task1 = () => {
	let result = 0;
	let nums = fs.readFileSync("2024/day1/data.txt", "utf8").split("\n");

	let col1 = []
	let col2 = []

	nums.forEach(num => {
		let row = num.split("   ");
		col1.push(parseInt(row[0]));
		col2.push(parseInt(row[1]));
	})
	col1.sort((a, b) => a - b);
	col2.sort((a, b) => a - b);

	console.log(col1);
	console.log(col2);

	col1.forEach((num,index) => {

			if(col2[index] >= col1[index] ) {
				result += col2[index] - col1[index]
			} else {
				result += col1[index] - col2[index]
			}

	})

	console.log("1 day 1 task \n result", result);
};
module.exports = day1task1;
