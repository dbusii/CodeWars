/*
Palindrome strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
Examples

"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
*/

// Long solution
// function isPalindrome(line) {
// let start = line.toString().substring(0,line.length/2)
// let end = line.toString().slice(line.length/2).split("").reverse().join("")
// return start === end
// }

//short solution
function isPalindrome(line) {
  return line.toString() === line.toString().split('').reverse().join('') 
}