/*
Highest Scoring Word
*/

function high(x) {
  //code your magic here
  const str = x.split(' ');
  const resultArr = [];
  const result = str.reduce((blank,word) => {
    let c = 0;
    for(let j=0;j<word.length;j++){
        c = c + (word.charCodeAt(j) - 96);
    }
    resultArr.push(c);
  },0)
  return str[resultArr.indexOf(resultArr.slice().sort((a,b) => b-a)[0])];
}
