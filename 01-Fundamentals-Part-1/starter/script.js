/*
let js = "amazing";

let results = 40 + 8 + 23 - 10;
console.log(results);

//declaring a variable
let firstName = `Jonas`;
console.log(firstName);

// practice assignment 1

let country = `Romania`;
let continent = `Europe`;
let population = 19000000;

console.log(country, continent, population);

//type of

console.log(typeof true);
console.log(typeof 34);
console.log(typeof "Nana");

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);



//let, const and var

let age = 30;
age = 31;

const birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Kwame";
const lastName = "Nana";
console.log(`${firstName} ${lastName}`);

let x = 10 + 5;



// coding challenges 1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

console.log(BMIJohn, BMIMark);

//let me use functions to solve this

function bmi(mass, height) {
  console.log(mass / (height * height));
}

bmi(95, 1.88);
bmi(85, 1.76);
bmi(78, 1.69);



const firstName = "nana";
const job = "teacher";
const birthYear = 1987;
let now = 2022;

const kwame = `I'm ${firstName} and I am ${now - birthYear} old ${job}`;
console.log(kwame);


const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving lessons🚗`);
}


*/

//coding challenge 2

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
console.log(`Mark's BMI is ${BMIMark}`);

let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`John's BMI is ${BMIJohn}`);

if (BMIJohn > BMIMark) {
  console.log(`John has a higher BMI than Mark`);
} else if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's BMI`);
} else {
  console.log(`They have the same BMI`);
}
