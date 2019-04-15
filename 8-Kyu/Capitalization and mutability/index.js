/*
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

// Long answer
// function capitalizeWord(word) {
// 		const firstLetter = word[0].toUpperCase()
// 			const body = word.substring(1).toLowerCase()
// 	  		return `${firstLetter}${body}`; 
// }

// Short Answer

function capitalizeWord(word) {
return word[0].toUpperCase() + word.substring(1).toLowerCase()
}