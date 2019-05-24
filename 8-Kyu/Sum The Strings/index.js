/*
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.
*/

// Long Answer
// function sumStr(a,b) {
//   return  a.length === 0 && b.length === 0 ? "0" :
//           a.length === 0 ? parseInt(b).toString() : 
//           b.length === 0 ? parseInt(a).toString() : (parseInt(a) + parseInt(b)).toString()
// }

Short Answer
function sumStr(a,b) {
 return String(Number(a) + Number(b)) 
}