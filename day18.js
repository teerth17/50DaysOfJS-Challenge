/*
Calculate Grains on a given square on a chessboard
*/

const totalGrains = (input) => {
	// Code here
    
	return (1n << 64n) - 1n;
    
} 

const grainsOn = (input) => {
	// Code here

	return BigInt(Math.pow(2,input-1));
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains()}`)
