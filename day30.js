/*
Write a Program to Find the Factorial of a Number
The factorial of a number is the product of all the numbers from 1 to that number.
*/

function factorial(n) {
	// write your code here
    if(n == 1){
        return 1;
    }
	return n * factorial(n-1) 
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
