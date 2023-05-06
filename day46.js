/*
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
  // your code here
  str = str.toLowerCase()
  const sets = new Set(str);
  return (str.length === sets.size);
  
}
