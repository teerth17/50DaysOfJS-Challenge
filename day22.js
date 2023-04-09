/*
Unique In Order:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements. The argument can contain a string or an array
*/

let uniqueInOrder = (iterable) => {
  
  //your code here - remember iterable can be a string or an array
  return [...iterable].filter((a,i) => 
    a !== iterable[i-1]
  );
};
