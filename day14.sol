/*
Convert given array of digits of a base to another asked base
*/

const convertToBase = (num,base,numLength = 1 + ~~(Math.log(num)/Math.log(base)))=> numLength ? [...convertToBase(num/base | 0,base,numLength-1), num%base] : [] 

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
    if(baseA < 1){
        throw new Error("Wrong BaseA");
    } 
    if(baseB < 1){
        throw new Erroe("Wrong BaseB");
    }

	return convertToBase(digits.reduce((num,digit) => digit + num*baseA),baseB);
}
