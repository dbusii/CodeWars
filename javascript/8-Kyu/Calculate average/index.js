/*
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return array.reduce(reducer)/ array.length
}