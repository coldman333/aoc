let fs = require("fs");

const day3task2 = () => {
	 let obj = {}
	 let first='', last = '';
	 let nums =   fs.readFileSync("2021/day3/data2.txt", "utf8")
	 .split("\n")
	 .map(item => item.split(''))

	 let numsCopy = [...nums];
	 let numsCopy2 = [...nums];

		for(let i = 0 , k = 0; i < nums[0].length; i++ ){
			numsCopy = numsCopy.filter(item => {
				console.log('item', item,  parseInt(item[i])+1)
				if( parseInt( item[i]) !== i%2) {
					return item;
				}
			})
			console.log('numsCopy',i, numsCopy);
		}
		console.log(numsCopy);
};
module.exports = day3task2;
