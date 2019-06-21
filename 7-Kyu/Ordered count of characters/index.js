/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  let set1 =  [...new Set(text)]
  return set1.map((char)=> [char, text.split(char).length-1])
}