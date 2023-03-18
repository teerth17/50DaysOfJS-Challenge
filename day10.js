/*
Write a function to remove array element based on object property?
*/

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "id"

function removeArrayElement(filterField) {
    
    return array.filter( object => {
        return object.field != filterField
    })
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
