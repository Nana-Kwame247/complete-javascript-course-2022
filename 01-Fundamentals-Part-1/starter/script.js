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




// type conversion

const inputYear = "1991";

console.log(Number(inputYear) + 18);


//five falsy values

//0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));


//challenge 3

//calculating average score
dolphinScore1 = 96;
dolphinScore2 = 108;
dolphinScore3 = 89;

let averageDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
console.log(averageDolphinScore);

koalaScore1 = 88;
koalaScore2 = 91;
koalaScore3 = 110;

let averageKoalaScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(averageKoalaScore);

//comparing

if (averageDolphinScore > averageKoalaScore) {
  console.log(`Dolphin won with an average score of ${averageDolphinScore}`);
} else if (averageKoalaScore > averageDolphinScore) {
  console.log(`Koala won with an average score of ${averageKoalaScore}`);
} else {
  console.log(
    `There is a tie , the average koala score: ${averageKoalaScore} is the same as the average dolphin score: ${averageDolphinScore}`
  );
}

//testing for minimum score
//minimum score should be at least 100

//if (average)
// 


// the switch statement

const day = "monday";

switch (day) {
  case "monday":
    console.log(`I plan my course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`not a valid day`);
}



//conditional operator

const age = 23;

age >= 18
  ? console.log(`i like to drink wine`)
  : console.log(`I like to drink water`);

  */

//coding challenge #4
let bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${
    tip + bill
  }`
);
