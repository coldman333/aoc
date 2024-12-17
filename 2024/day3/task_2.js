let fs = require("fs");

const day1task1 = () => {
//	let nums = fs.readFileSync("2024/day3/data3.txt", "utf8").split("\n");
	let nums = fs.readFileSync("2024/day3/data.txt", "utf8").split("mul(");
	// nums.pop() //  remove empty line

	console.log("nums", nums);
	let count = 0

	const FilteredList = [];

    let doThis = true
	nums.map((item) => {
		console.log(item);
		if(doThis){
			FilteredList.push(item);
		}
		if (item.includes("don't()")) {
			doThis = false
		}
		if (item.includes('do()')) {
			doThis = true
		}
	});

	FilteredList.map((item) => {
		let arr =  item.split(',');
		let first =  arr[0];
		let secondPart  = arr[1];
		secondPart =  secondPart && secondPart.split(')')[0];


		const isValidNumber = (strNumber ) => {
			let isValid = false;
			let numb = parseInt(strNumber);

			if (strNumber  === "" + numb) {
				isValid = true;
			}
			return isValid;
		}

		if(isValidNumber(first)  && isValidNumber(secondPart)){
			count +=  (parseInt(first) * parseInt(secondPart));
		}

		console.log('1: ', first, '2: ', secondPart);
	});

	console.log("count", count);
};

module.exports = day1task1;
