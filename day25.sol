/*
Find the odd int
Given an array of integers, find the one that appears an odd number of times.
*/

function count(arr,element){
    return arr.filter((currentElement) => currentElement == element).length;
}

function findOdd(arr) {
  //happy coding!

  let array = [];
  for(let i in arr){
      array[i] = count(arr,arr[i]);
      if(array[i] % 2 != 0){
          return arr[i];
      }
  }
  return -1;
}
