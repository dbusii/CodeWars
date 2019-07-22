/*
Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have the length of the circular arc A.

    Use π = Math.PI (M_PI in PHP)
    Round to two decimals.

*/

function squareArea(A){
  return Number(Math.pow(2 * A / Math.PI, 2).toFixed(2))
}