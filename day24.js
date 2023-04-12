/*
Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.
*/

function spinWords(string) {
  //TODO Have fun :)
  newString = string.split(" ")
  for(let i=0;i<newString.length;i++){
      if(newString[i].length > 5){
            newString[i] = newString[i].split("").reverse().join("")
      }
      
  }
  return String(newString).split(",").join(" ")
}
