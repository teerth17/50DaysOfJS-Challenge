/*
Create a regular expression to validate if the given input is valid Indian mobile number or not
*/

const number = '+919876543210';

function validateMobile(number) {
    const regExpConst = /^(\+91|0)?\s?\d{10}$/;
    return regExpConst.test(number)
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
