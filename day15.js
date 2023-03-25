/*
Determine if a sentence is a pangram
*/

const isPangram = (input) => {
	// Code here
    const lowerInput = input.toLowerCase();
    return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => lowerInput.includes(c))
}
