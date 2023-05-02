/*
Count the divisors of a number
*/

function getDivisorsCnt(num) {
  // code below
  let count = 2;
  for(let i=2;i<=num/2;i++){
      if(num % i == 0){
         count++; 
      }
  }
  return count;
  
}
