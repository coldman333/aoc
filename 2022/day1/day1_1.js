let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day1/data.txt", "utf8").split("\n");
  let max = 0;
	let acum = 0
	nums.forEach((item, index) => {
		if(item === "") {
			if(acum > max) {
				max = acum
			}
			acum = 0
		} else {
			acum += parseInt(item)  ;
		}

	 });

	console.log("1 day 1 task \n max", max);
};

module.exports = day1task1;
