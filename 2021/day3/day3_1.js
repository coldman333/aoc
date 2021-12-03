let fs = require("fs");

const day3task1 = () => {

	let obj = {}
	let first='', last = '';
	 fs.readFileSync("2021/day3/data.txt", "utf8")
	.split("\n")
	.map(item=> item.split(''))
	.map(item=>{
		item.map((num, i ) => {
			obj[`l${i}`] = Array.isArray(obj[`l${i}`]) ? obj[`l${i}`]:[];
			obj[`l${i}`].push(num);
		})
	})
	for (const [key] of Object.entries(obj)) {
		let sim =  obj[`${key}`][obj[`${key}`].sort().length/2]
		first += sim
		last += sim === '1'? '0':'1'
	}
	const result = parseInt(first,2).toString(10) * parseInt(last,2).toString(10)

	console.log("3 day 1 task \n result", result);
};
module.exports = day3task1;