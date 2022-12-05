let fs = require("fs");


// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
//


// [V]     [B]                     [F]
// [N] [Q] [W]                 [R] [B]
// [F] [D] [S]     [B]         [L] [P]
// [S] [J] [C]     [F] [C]     [D] [G]
// [M] [M] [H] [L] [P] [N]     [P] [V]
// [P] [L] [D] [C] [T] [Q] [R] [S] [J]
// [H] [R] [Q] [S] [V] [R] [V] [Z] [S]
// [J] [S] [N] [R] [M] [T] [G] [C] [D]
//  1   2   3   4   5   6   7   8   9




const day1task1 = () => {

	//
	// let ship = [
	// 	['Z','N'],
	// 	['M','C','D'],
	// 	['P']
	// ]

	let ship = [
		['J','H','P','M','S','F','N','V'],
		['S','R','L','M','J','D','Q'],
		['N','Q','D','H','C','S','W','B'],
		['R','S','C','L'],
		['M','V','T','P','F','B'],
		['T','R','Q','N','C'],
		['G','V','R'],
		['C','Z','S','P','D','L','R'],
		['D','S','J','V','G','P','B','F'],
	]



	let nums = fs.readFileSync("2022/day5/data.txt", "utf8").split("\n");
	nums.pop() //  remove empty line

	let count = 0
	nums.forEach((item) => {
		let move = [];
		let arrMove = item.split(' ')
		arrMove.forEach( i => {
			if(parseInt(i)) {
				move.push(parseInt(i))
			}
		})

		let repeat = move[0]
		let from  =  move[1]
		let to  =  move[2]

		let temp = ship[ from - 1].slice( ship[ from - 1].length - move[0],   )
		do {
			ship[from - 1].pop()
			repeat--
		} while ( repeat > 0);

		ship[ to - 1] = ship[ to - 1].concat(temp)
	});
	let res =''
	ship.forEach( (i, index) =>{
		res += ship[index][ship[index].length-1]
	})

	console.log("res", res);
};

module.exports = day1task1;
