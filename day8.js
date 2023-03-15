/*
Write a function which accepts two valid dates and returns the difference between them as number of days
*/

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    
    diff = Math.abs(Date.parse(dateText2) - Date.parse(dateText1));
    return diff/DAY_IN_MILLISECONDS;
  
  // or
  
   diff = Math.abs(new Date(dateText2) - new Date(dateText1))

    // return Math.ceil(diff/DAY_IN_MILLISECONDS);
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
