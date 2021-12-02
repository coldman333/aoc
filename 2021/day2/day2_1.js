let fs = require("fs");

const day2task1 = () => {
	let nums = fs.readFileSync("2021/day2/data.txt", "utf8")
	.split("\n")
	.map(item=> item.split(' '))

	const forwardReducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue[1]);
	const upReducer = (previousValue, currentValue) => parseInt(previousValue) - parseInt(currentValue[1]);

	const forward =  nums.filter(item=> item[0]==='forward').reduce(forwardReducer,0)
	const down =  nums.filter(item=> item[0] ==='down').reduce(forwardReducer,0)
	const up =  nums.filter(item=> item[0] ==='up').reduce(upReducer,0)

	console.log("2 day 1 task \n result", (down + up) * forward);
};
module.exports = day2task1;
