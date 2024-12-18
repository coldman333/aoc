let fs = require("fs");

const day1task1 = () => {
	let rows = fs.readFileSync("2024/day4/data.txt", "utf8").split("\n").map(item => item.split(''));
	//nums.pop() //  remove empty line

	const XMAS = 'XMAS';
    let count = 0;
//  S..S..S
//  .A.A.A.
//	..MMM..
//  SAMXMAS
//  ..MMM..
//  .A.A.A.
//  S..S..S
	//rows.map(item => item.split(''));
	//console.log("nums", rows);
	rows.map((lines, i,rows) => {
		lines.map((char,j,lines) => {
			if(lines[j] === XMAS[0]) {
				//  console.log(lines[j],lines[j+1], lines[j+2], lines[j+3]);
               // 15:00
				if((  rows[i][j+1] && rows[i][j+1] === XMAS[1]) &&
					 (rows[i][j+2] && rows[i][j+2] === XMAS[2]) &&
					 (rows[i][j+3] && rows[i][j+3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i][j+1], rows[i][j+2], rows[i][j+3]);
				//	console.log('ixmas pos', i,j);
					count++;
				}
				//16:20
				if(( rows[i+1] && rows[i+1][j+1] && rows[i+1][j+1] === XMAS[1]) &&
					(rows[i+2] && rows[i+2][j+2] && rows[i+2][j+2] === XMAS[2]) &&
					(rows[i+3] && rows[i+3][j+3] && rows[i+3][j+3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i+1][j+1], rows[i+2][j+2], rows[i+3][j+3]);
				//	console.log('ixmas pos', i,j);
					count++;
				}

				//18:00
				if(( rows[i+1] && rows[i+1][j] && rows[i+1][j] === XMAS[1]) &&
					(rows[i+2] && rows[i+2][j] && rows[i+2][j] === XMAS[2]) &&
					(rows[i+3] && rows[i+3][j] && rows[i+3][j] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i+1][j], rows[i+2][j], rows[i+3][j]);
					//console.log('ixmas pos', i,j);
					count++;
				}

				//19:40
				if(( rows[i+1] && rows[i+1][j-1] && rows[i+1][j-1] === XMAS[1]) &&
					(rows[i+2] && rows[i+2][j-2] && rows[i+2][j-2] === XMAS[2]) &&
					(rows[i+3] && rows[i+3][j-3] && rows[i+3][j-3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i+1][j-1], rows[i+2][j-2], rows[i+3][j-3]);
				//	console.log('ixmas pos', i,j);
					count++;
				}

				//21:00
				if(( rows[i] && rows[i][j-1] && rows[i][j-1] === XMAS[1]) &&
					(rows[i] && rows[i][j-2] && rows[i][j-2] === XMAS[2]) &&
					(rows[i] && rows[i][j-3] && rows[i][j-3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i][j-1], rows[i][j-2], rows[i][j-3]);
				//	console.log('ixmas pos', i,j);
					count++;
				}

				//22:50
				if(( rows[i-1] && rows[i-1][j-1] && rows[i-1][j-1] === XMAS[1]) &&
					(rows[i-2] && rows[i-2][j-2] && rows[i-2][j-2] === XMAS[2]) &&
					(rows[i-3] && rows[i-3][j-3] && rows[i-3][j-3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i-1][j-1], rows[i-3][j-2], rows[i-3][j-3]);
					// console.log('ixmas pos', i,j);
					count++;
				}

				//12:00
				if(( rows[i-1] && rows[i-1][j] && rows[i-1][j] === XMAS[1]) &&
					(rows[i-2] && rows[i-2][j] && rows[i-2][j] === XMAS[2]) &&
					(rows[i-3] && rows[i-3][j] && rows[i-3][j] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i-1][j], rows[i-3][j], rows[i-3][j]);
					//console.log('ixmas pos', i,j);
					count++;
				}

				//13:10
				if(( rows[i-1] && rows[i-1][j+1] && rows[i-1][j+1] === XMAS[1]) &&
					(rows[i-2] && rows[i-2][j+2] && rows[i-2][j+2] === XMAS[2]) &&
					(rows[i-3] && rows[i-3][j+3] && rows[i-3][j+3] === XMAS[3])
				) {
					console.log(rows[i][j], rows[i-1][j+2], rows[i-3][j+2], rows[i-3][j+3]);
					console.log('ixmas pos', i,j);
					count++;
				}





			}
		})

	})



	 console.log("count", count);
};

module.exports = day1task1;
