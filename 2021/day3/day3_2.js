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
				// return : numsCopy[]
			})
			console.log('numsCopy',i, numsCopy);
		}

		console.log(numsCopy);

	// .map(item => {
	// 	item.map((num, i ) => {
	// 		obj[`l${i}`] = Array.isArray(obj[`l${i}`]) ? obj[`l${i}`]:[];
	// 		obj[`l${i}`].push(num);
	// 	})
	// })
	// for (const [key, value] of Object.entries(obj)) {
	// 	let sim =  obj[`${key}`][obj[`${key}`].sort().length/2]
	// 	first += sim
	// 	last += sim === '1'? '0':'1'
	// }

	//const result = '?'
	// console.log("3 day 2 task \n result", result);
};
module.exports = day3task2;