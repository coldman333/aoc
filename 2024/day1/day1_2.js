let fs = require("fs");
const day1task2 = () => {
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
		let first  = col2.indexOf(col1[index])
        if( first !== -1 ) {
          let last =  col2.lastIndexOf(col1[index]);
			result+=  col1[index]  * (last-first +1)
		} else {
			result+= 0
		}
	})

	console.log("1 day 1 task \n result", result);
};
module.exports = day1task2;


// (You guessed 1161.) result 1217
