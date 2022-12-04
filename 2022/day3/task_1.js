let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day3/data2.txt", "utf8").split("\n");
	nums.pop() //  remove empty line

	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let arr_en_EN = arr_en.concat(arr_EN)

  let count = 0
	nums.forEach((item) => {
		let left  = item.slice(0, item.length/2).split('');
		let right  = item.slice(item.length/2, item.length).split('');
		let searchRes = ''
		left.map(l => {
			if(right.indexOf(l) >= 0 ){
				searchRes = l
			}
		})
		count += arr_en_EN.indexOf(searchRes) + 1
	});

	console.log("count", count);
};

module.exports = day1task1;
