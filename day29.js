/*
Mexican Wave
Mexican Wave Origin
To create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
*/

// given sol.
// return [...str].map((c, i) => `${str.slice(0, i)}${c.toUpperCase()}${str.slice(i +  1, str.length)}`).filter(s => /[A-Z]/.test(s))

function wave(str) {
  // Your Code goes below
  arr= [];
  for(let i=0;i<str.length;i++){
      if(str[i] == " "){
          continue;
      }
      arr.push(str.slice(0,i) + upperCaseLetter(str,i) + str.slice(i+1,str.length));
 }
  return arr;
}
function upperCaseLetter(str,index){
    return str[index].toUpperCase();
}
console.log(wave("hello"));
