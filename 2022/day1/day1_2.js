let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day1/data.txt", "utf8").split("\n");
	let max1 = 0;
	let max2 = 0;
	let max3 = 0;
	let acum = 0;
	nums.forEach((item, index) => {
		if(item === "") {
			if(acum > max1) {
				max3 = max2
				max2 = max1
				max1 = acum
			}
			if(acum > max2 && acum < max1) {
				max3 = max2
				max2 = acum
			}
			if(acum > max3 && acum < max2) {
				max3 = acum
			}
			acum = 0
		} else {
			acum += parseInt(item)  ;
		}

	});

	console.log("1 day 2 task \n max1", max1);
	console.log("1 day 2 task \n max2", max2);
	console.log("1 day 2 task \n max3", max3);
	console.log("1 day 2 task \n maxSum", max1 + max2 + max3);
};

module.exports = day1task1;
