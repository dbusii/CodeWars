/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
*/

//Long solution
const arr = n => {

let i = 0
let arr = []

while (i < n){
	arr.push(i)
	i++
}
	return arr
}

//Short solution
const arr = n => { return n ? [...new Array(n).keys()] : [] }