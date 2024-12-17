let fs = require("fs");

const day1task1 = () => {
	let nums = fs.readFileSync("2024/day3/data.txt", "utf8").split("mul(");
	console.log("nums", nums);

   let count = 0
	 nums.map((item) => {
		let arr =  item.split(',');
		let first =  arr[0];
		let secondPart  = arr[1];
		 secondPart =  secondPart && secondPart.split(')')[0];


		 const isValidNumber = (strNumber ) => {
			 let isValid = false;
			 let numb = parseInt(strNumber);

			  if (strNumber  === "" + numb) {
				  isValid = true;
			  }
			  return isValid;
		 }

        if(isValidNumber(first)  && isValidNumber(secondPart)){
			count +=  (parseInt(first) * parseInt(secondPart));
		}

		console.log('1: ', first, '2: ', secondPart);
	 });

	console.log("count", count);
	// test data set 2 = 161
	// full data set  = 188192787
};

module.exports = day1task1;
