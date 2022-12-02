let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day2/data.txt", "utf8").split("\n");
	nums.pop() //  remove empty line

	let G = {
		'A': 1, //Rock
		'B': 2, //Paper
		'C': 3, //Scissors
	}
	let ME = {
		'X': 1,  //Rock
		'Y': 2,  //Paper
		'Z': 3,  //Scissors
	}

	let win = {
		'A X': 3,
		'A Y': 6,
		'A Z': 0,
		'B X': 0,
		'B Y': 3,
		'B Z': 6,
		'C X': 6,
		'C Y': 0,
		'C Z': 3,
	}

  let count = 0
	nums.forEach((item) => {
		 count+= win[item] +  ME[item[2]]
	});

	console.log("count", count);
};

module.exports = day1task1;
