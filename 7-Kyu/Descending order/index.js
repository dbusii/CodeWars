/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/

function descendingOrder(n){
	const arr =  n.toString().split("")
	const map1 = arr.map((char) => parseInt(char))
	const sort1 = map1.sort(function(firstEl, secondEl){return secondEl-firstEl})
		return parseInt(sort1.join(""))
}