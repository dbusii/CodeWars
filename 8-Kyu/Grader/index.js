/*
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	'F'
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"

Examples:

grader(0.9) == 'A'
grader(0.3) == 'F'
grader(234) == 'F'
grader(0.75) == 'C'
*/

function grader(score) {
  return score >= 0.9 && score <= 1 ? "A" : score >= 0.8 ? "B" : score >= 0.7 ? "C": score >= 0.6 ? "D" : "F" 
}