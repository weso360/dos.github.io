//input for my age
let myAge = 21;
// dog years
let earlyYears = 2;
// first two dog years each to human years
earlyYears *= 10.5;

let laterYears = myAge - 2;
//calculates dog years accounte by later years
laterYears *= 4
//variable which calculates the previous two variables
let myAgeInDogYears = earlyYears + laterYears;
//returns string in lowercases
let myName = 'Wesley'.toLowerCase();


console.log(`My name is ${myName}. i am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`)
