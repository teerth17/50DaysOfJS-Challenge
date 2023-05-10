/*
Is this a triangle?
*/

function isTriangle(a, b, c) {
  // your code here
  const max = Math.max(a,b,c);
  let sum = 0;
  if(a === max){
      sum = b+c;
  }
  if(b === max){
      sum = a+c;
  }
  if(c === max){
      sum = a+b;
  }
  if(sum > max){
      return true;
  }else{
      return false;
  }
  
}

// efficient 
function isTriangle(a,b,c){ 
 return a + b > c && a + c > b && c + b > a; 
 } 
