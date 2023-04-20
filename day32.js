/*
Write a program to print unique values from an array
*/

function set(arrOfNum) {
	// write your code here
	let newArray = [];
	for(let i in arrOfNum){
	    newArray = Array.from(new Set(arrOfNum));
	}
	return newArray;
  // OR
  // set  = new Set(arrOfNum)
  // return [...set]
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));
