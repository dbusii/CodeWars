/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  let map1 = x.map(a => parseInt(a))
  return map1.reduce((b,c) => b + c )
}