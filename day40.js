/*
Categorize New Member
*/

function openOrSenior(data) {
  // your code goes below
  data.map((e,i) => {
      if(e[0] >= 55 && e[1] > 7){
          data[i] = "Senior";
      }else{
          data[i] = "Open";
      }
  })
  return data;
}


let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
