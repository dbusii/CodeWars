/*
You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.
*/

//Long solution
// function oddBall(arr){
// const oddPosition = arr.indexOf("odd")
//   for(let i = 0 ; i < arr.length; i++){
//   if(arr[i] === oddPosition){
  
//   return true
//   }
// }
// return false
// }

//Short solution
function oddBall(arr){
    return arr.includes(arr.indexOf("odd"));
}