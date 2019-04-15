/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  const map1 = str.split("").filter(a => a === "x" || a === "X");
  const map2 = str.split("").filter(c => c === "o"  || c === "O");
  return map1.length === map2.length
}
