/*
Find The Parity Outlier
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers) {
  //your code here\
  if(checkEven(integers)){
      for(let i in integers){
          if(integers[i]%2 != 0){
              return integers[i];
          }
      }
  }else{
      for(let i in integers){
          if(integers[i]%2 == 0){
              return integers[i];
          }
      }
  }
  
}
function checkEven(integers){
    if(integers[0] % 2 == 0 && integers[1] % 2 == 0){
        return true;
    }else{
        return false;
    }
}
