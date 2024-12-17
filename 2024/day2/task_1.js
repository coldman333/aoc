let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2024/day2/data.txt", "utf8").split("\n");
	//nums.pop() //  remove empty line

    let count = 0
	nums.forEach((item, index) => {
		let lines = item.split(" ").map((num) => parseInt(num));
		let operation = []
		lines.map((num, index) => {
			if(!lines[index + 1])  return false
			operation.push( {
				vector:  num > lines[index + 1]? 'down' : num < lines[index + 1] ? 'up' : 'middle',
			    number: Math.abs(num - lines[index + 1])
			});
		})

		 console.log('line', item);
		 console.log('operation', operation);
         let notValidArrLine=  operation.filter( (i)=> i.vector ==="up" && i.vector ==="down"  ||
			 i.vector ==="middle" ||  i.number > 3 || i.number <= 0
		 )
		 console.log('notValidArrLine',  notValidArrLine)



		 if(!operation.filter( (i)=> i.vector === "up" && i.vector ==="down"  ||
			 i.vector ==="middle" ||  i.number > 3
		 ).length){
			count++
		 }
	});

	console.log("count", count);
	// wromg algoritm
};

module.exports = day1task1;
