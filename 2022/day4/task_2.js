let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day4/data.txt", "utf8").split("\n");
	nums.pop() //  remove empty line

	let count = 0
	nums.forEach((item) => {
		let elfes  = item.split(',');
		let left = ( elfes[0].split('-')).map(i=>parseInt(i))
		let right = ( elfes[1].split('-')).map( i => parseInt(i) )
		if( (left[0] <= right[0]  &&  left[1] >=  right[1]) ||
			( left[0] >= right[0]  &&  left[1] <=  right[1]) ||
			( left[1] >= right[0]  &&  left[1] <=  right[1]) ||
			( left[0] >= right[0]  &&  left[0] <=  right[1])
		) {
			count +=  1
		}
	});
	console.log("count", count);
};

module.exports = day1task1;
