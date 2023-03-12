/*
Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
*/

const str = 'XeroX';

function getTheGapX(str) {
    let count=0;
    const firstIndex = str.indexOf("X");
    const lastIndex = str.lastIndexOf("X");

    if(firstIndex == -1 || lastIndex == -1){
        return -1
    }
    if(firstIndex == lastIndex){
        return 0
    }
    return lastIndex - firstIndex;
    
}
console.log(`Gap between the X's: ${getTheGapX(str)}`)
