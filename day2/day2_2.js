let fs = require("fs");

const day2task2 = () => {
	let nums = fs.readFileSync("day2/data.txt", "utf8")
	.split("\n")
	.map(item=> item.split(' '))

	 const reducer = (previousValue, currentValue) => {
		let  {aim, forward } = previousValue;
		let direction = currentValue[0];

		switch(direction){
			case 'forward':
				return {
					...previousValue,
					forward:(forward + parseInt(currentValue[1])) ,
					down: previousValue.down + (aim * currentValue[1])
				}
			case 'down':
				return {
					...previousValue,
					aim: aim + parseInt(currentValue[1]),
				}
			case 'up':
				return {
					...previousValue,
					aim: aim - parseInt(currentValue[1]),
				}
			default:
				return previousValue
		}
	 }

  let location = nums.reduce(reducer,{forward:0,down:0,aim:0})

	console.log('result', location.forward  * location.down )

	//return (down + up) * forward  //  1746616
	// result 1741971043

};

module.exports = day2task2;
