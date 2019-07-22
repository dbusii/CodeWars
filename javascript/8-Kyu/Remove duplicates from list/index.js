/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  let set1 = new Set(a)
  return Array.from(set1)
}