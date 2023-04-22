/*
Write a JavaScript function to get nth largest element from an unsorted array.
*/

function nthlargest(arr, highest) {
	// write your code here
	let newArray = [];
	for(let i= 0; i<=highest;i++){
	    newArray.push(arr[i]);
	}
	newArray.sort((a,b) => a - b);
    return newArray[newArray.length - 1];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
