/*
Write a function to truncate a string to a certain number of words
Truncate a string to a certain number of words
*/

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    if(str.length <= wordLimit){
        return str;
    }
    return str.split(" ").splice(0,wordLimit).join(" ");

}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
