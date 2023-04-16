/*
Mumbling
Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.
Only alphabets are passed as arguments for the accum(s) funciton
*/

function accum(s) {
  // your code goes below
  return [...s.toUpperCase()].reduce((acc,curr,index) => acc + "-" + curr + curr.toLowerCase().repeat(index));

}
