/*
Convert number to reversed array of digits

Given a random number:

    C#: long;
    C++: unsigned long;

You have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
	let newArray = []
	const myStr = n.toString().split("").reverse().join("") 
		for (var i = 0; i < myStr.length; i++){ 
			newArray.push(parseInt(myStr[i]))
		} 
	return newArray
}