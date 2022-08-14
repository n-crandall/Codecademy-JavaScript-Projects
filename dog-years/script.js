let myAge = 30;
// My age
let earlyYears = 2;
// The first two years
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
// The first two years have been counted
laterYears *= 4;
// Past two, dog years are 4 human years
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// My age in dog years
let myName = 'Nikki Crandall'.toLowerCase();
// My name in lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// My name and age in human and dog years
