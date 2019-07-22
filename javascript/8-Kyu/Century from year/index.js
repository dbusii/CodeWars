/*
Introduction

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :

Given a year, return the century it is in.
Input , Output Examples ::

centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!
*/

// first solution

function century(year) {
	const numString = year.toString();
	const lastTwo = numString.substr(-2);
	const firstNumbers = numString.substring(0, numString.length-2);
	if (numString.length <= 2){
		return 1;
	} else if (lastTwo === "00"){
		return parseInt(firstNumbers);
	} else {
		return parseInt(firstNumbers) + 1;
	}
}

// second solution
function century(year) {
const cent = Math.ceil(year/100);
return cent;
}

