/*
Given a year, report if it is a leap year.
*/

const isLeap = (year) => {
	// code here
	return ((year % 4 === 0) && (year%100 !== 0) || (year % 400 === 0));    


}
