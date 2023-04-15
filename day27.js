/*
WeIrD StRiNg CaSe
Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased and you need to start over for each word.
*/

function toWeirdCase(string) {
  return [...string].map((e,i) => (i%2)? e.toLowerCase(): e.toUpperCase()).join("");
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
