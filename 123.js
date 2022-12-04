var isPalindrome = function(x) {
	let numSrting =  ''+ x;
	let numArr =  numSrting.split('');

	console.log('numArr', numSrting, numArr, numArr.length, numArr.length/2);
	let isPolindrome = false

	for(let i=0, l=numArr.length; i <= numArr.length/2;  i++, l-- ) {
		debugger
		if(numArr[i] === numArr[l-1]) {
			isPolindrome = true
		} else {
			isPolindrome= false ;
			break;
		}
	}


	return isPolindrome;

};

console.log('res', isPalindrome(-121))
console.log('res', isPalindrome(121))
console.log('res', isPalindrome(10))