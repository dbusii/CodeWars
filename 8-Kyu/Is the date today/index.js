/*
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.
*/

// Long Answer
// function isToday(date) {
// 	const today = new Date();
// 	const todayFormated = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
// 	const dateFormated = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
// 	return todayFormated === dateFormated;
// }

//Short Answer

function isToday(date) {
  return date.toDateString() === new Date().toDateString();
}