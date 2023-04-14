/*
Vowel Count
Return the number (count) of vowels in the given string.
*/

function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
   str = str.toLowerCase();
    for(let i in str){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            vowelsCount+=1;
        } 
    }
  return vowelsCount;
}

console.log(getCount("There exists only 5 vowels") );
