let fs = require("fs");

const day1task1 = () => {
	let rows = fs.readFileSync("2024/day4/data.txt", "utf8").split("\n").map(item => item.split(''));
	//nums.pop() //  remove empty line

	const XMAS = 'MAS';
	let count = 0;

//   1     2     3    4
//  S.S   M.S   M.M  S.M
//  .A.   .A.   .A.  .A.
//	M.M   M.S   S.S  S.M

	//rows.map(item => item.split(''));
	//console.log("nums", rows);
	rows.map((lines, i,rows) => {
		lines.map((char,j,lines) => {
			if(lines[j] === XMAS[1]) {
				// 1
				if(( rows[i-1] && rows[i-1][j-1] && rows[i-1][j-1] === XMAS[2]) &&
					(rows[i-1] && rows[i-1][j+1] && rows[i-1][j+1] === XMAS[2]) &&
					(rows[i+1] && rows[i+1][j-1] && rows[i+1][j-1] === XMAS[0]) &&
					(rows[i+1] && rows[i+1][j+1] && rows[i+1][j+1] === XMAS[0])
				) {
					console.log(rows[i-1][j-1], '.', rows[i-1][j+1]) ;
					console.log('.', rows[i][j], '.', );
					console.log(rows[i+1][j-1], '.', rows[i+1][j+1]);

					console.log('ixmas pos', i,j);
					count++;
					//5
				}

				// 2
				if(( rows[i-1] && rows[i-1][j-1] && rows[i-1][j-1] === XMAS[0]) &&
					(rows[i-1] && rows[i-1][j+1] && rows[i-1][j+1] === XMAS[2]) &&
					(rows[i+1] && rows[i+1][j-1] && rows[i+1][j-1] === XMAS[0]) &&
					(rows[i+1] && rows[i+1][j+1] && rows[i+1][j+1] === XMAS[2])
				) {
					console.log(rows[i-1][j-1], '.', rows[i-1][j+1]) ;
					console.log('.', rows[i][j], '.', );
					console.log(rows[i+1][j-1], '.', rows[i+1][j+1]);

					console.log('ixmas pos', i,j);
					count++;
				}

				// 3
				if(( rows[i-1] && rows[i-1][j-1] && rows[i-1][j-1] === XMAS[0]) &&
					(rows[i-1] && rows[i-1][j+1] && rows[i-1][j+1] === XMAS[0]) &&
					(rows[i+1] && rows[i+1][j-1] && rows[i+1][j-1] === XMAS[2]) &&
					(rows[i+1] && rows[i+1][j+1] && rows[i+1][j+1] === XMAS[2])
				) {
					console.log(rows[i-1][j-1], '.', rows[i-1][j+1]) ;
					console.log('.', rows[i][j], '.', );
					console.log(rows[i+1][j-1], '.', rows[i+1][j+1]);

					console.log('ixmas pos', i,j);
					count++;
				}

				// 4
				if(( rows[i-1] && rows[i-1][j-1] && rows[i-1][j-1] === XMAS[2]) &&
					(rows[i-1] && rows[i-1][j+1] && rows[i-1][j+1] === XMAS[0]) &&
					(rows[i+1] && rows[i+1][j-1] && rows[i+1][j-1] === XMAS[2]) &&
					(rows[i+1] && rows[i+1][j+1] && rows[i+1][j+1] === XMAS[0])
				) {
					console.log(rows[i-1][j-1], '.', rows[i-1][j+1]) ;
					console.log('.', rows[i][j], '.', );
					console.log(rows[i+1][j-1], '.', rows[i+1][j+1]);

					console.log('ixmas pos', i,j);
					count++;
				}




			}
		})

	})



	console.log("count", count);
};

module.exports = day1task1;
