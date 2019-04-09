/*
Complete the square sum method so that it squares each number passed into it and then sums the results together.

For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
	const reducer = (acc, currVal) => acc + currVal
	const newArray = numbers.map(x => Math.pow(x,2))
	return newArray.reduce(reducer, 0)
}