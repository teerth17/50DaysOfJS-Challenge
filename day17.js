/*
Longest Consecutive Sequence
Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.
*/

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	// Your code here
const setArray = new Set(inputArray);
    let max = 1;
    for(let i of inputArray){
        
        if(!setArray.has(i-1)){
            let len = 1;
            
            while(setArray.has(i+len)){
                len++;
            }
            max = Math.max(len,max);
        }
        
    }
	return max
}
