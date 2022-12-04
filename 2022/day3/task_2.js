let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2022/day3/data.txt", "utf8").split("\n");
	nums.pop() //  remove empty line

	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let arr_en_EN = arr_en.concat(arr_EN)

	let count = 0

	for (let i = 0; i <= nums.length-1; i = i + 3) {

		let arr1 = nums[i].split('')
		let arr2 = nums[i+1].split('')
		let arr3 = nums[i+2].split('')

		let searchRes = []
		arr1.map(l => {
			if(arr2.indexOf(l) >= 0 ){
				searchRes.push(l)
			}
		})
		let resL =[];
		searchRes.map(l=>{
			if(arr3.indexOf(l) >= 0 ){
				resL =  l
			}
		})
		count += arr_en_EN.indexOf(resL) + 1
	}
	console.log("count", count);
};

module.exports = day1task1;
