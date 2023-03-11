/*
Write a function which can convert the time input given in 12 hours format to 24 hours format
The check for 'AM' and 'PM' can be verified using endsWith String method
An extra 0 would be needed if the hours have single digit
*/

const time = '12:10AM';

function convertTo24HrsFormat(time) {
    
    const timeLower = time.toLowerCase();
    let [hour,minute] = timeLower.split(":");
    
    if(timeLower.endsWith("am")){
        hour = hour == 12? "0":hour;

    }else{
        hour = hour == 12? hour:String(+hour+12);

    }
    return hour.padStart(2,0) + ":" + minute.slice(0,2).padStart(2,0);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
