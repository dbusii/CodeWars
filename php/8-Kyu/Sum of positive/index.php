<?php
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Long solution
// function positive_sum($arr) {

// $val = 0;

//   for ($i = 0 ; $i < sizeof($arr) ; $i++){ 
  
//     if ($arr[$i] > 0){
//     $val += $arr[$i];
//     }
//   }
  
//   return $val;
  
// }

// Short solution
function positive_sum($a) {
  return array_sum(array_filter($a, function ($n) {return $n > 0;}));
}


?>