/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// // Long solution

// function stray(numbers) {
// let duplicates = 0;

//   for (let i = 0; i<numbers.length; i++){
//   if (numbers[i] === numbers[i+1]){
//   duplicates = numbers[i]
//   }
// }
//   const filt = numbers.filter(a => a !== duplicates)
//   return parseInt(filt)
// }

// Short solution

function stray(numbers) {
  return numbers.reduce((a,b) => a ^ b)
}