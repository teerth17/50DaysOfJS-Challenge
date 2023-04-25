/*
Luhn algorithm
Instructions
Given a number determine whether or not it is valid per the Luhn formula.

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The task is to check if a given string is valid.

*/

const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);
    const isDivisibleByTen = n => !(n % 10);
    const isOdd = n => !!(n & 1);
    const luhnReduction = (sum, num, i, { length }) => sum + num + (!isOdd(length - i) && num - (num >= 5 && 9));

    const valid = string => {
        const nums = [...string.replace(/\s/g, '')].map(Number);
        return nums.length > 1 &&
            nums.every(isNumber) &&
            isDivisibleByTen(nums.reduceRight(luhnReduction));
    };
