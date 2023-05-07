/*
Human readable duration format
*/

function formatDuration(seconds) {
  // your code here
  if(seconds == 0){
      return "now";
  }
  
  const years = Math.floor(seconds / (60*60*24*365));
  const days = Math.floor(seconds / (60*60*24)) % 365;
  const hours = Math.floor(seconds / (60*60)) % 24;
  const minutes = Math.floor(seconds / (60)) % 60;
  const second = seconds%60;
  
  const duration = [years,days,hours,minutes,second];
  const string = ["year","day","hour","minute","second"];
  
  const format = duration.map((el,i) => {
      if(el > 1){
          return el + " " + string[i] + "s";
      }
      if(el == 1){
          return el + " " + string[i];
      }
  }).filter(el => el !== undefined);
  
   if (format.length > 1) {
    var last = format.pop();
    return format.join(', ') + ' and ' + last;
  } else {
    return format[0];
  }
}
