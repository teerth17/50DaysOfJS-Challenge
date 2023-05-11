/*
Get the Middle Character
*/

function getMiddle(s) {
  // your code here
  if(s.length%2 == 0){
    return (s[s.length / 2] + s[s.length/2 - 1]);
  }else{
    return s[Math.floor(s.length/2)];
  }
}
