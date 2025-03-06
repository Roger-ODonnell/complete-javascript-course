// let js = "Js is fun";

// if (js === "Js is fun") {
//   alert(js);
// }

/*console.log(81 + 41 - 10);

let firstName = "Matilda";
let first = "Roger";
let firstNamePerson = "Roger";

console.log(firstName);
console.log(first);
console.log(firstNamePerson);
console.log(firstName);*/

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);

// console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "JavaScriptIsFun");

// JavaScriptIsFun = "YES!";

// console.log(typeof JavaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 2003;

// const job;

// var job = "programmer";
// job = "teacher";

// lastName = "oDonnell";
/*const now = 2037;
const ageRoger = now - 1991;
const ageSarah = now - 2018;
console.log(ageRoger, ageSarah);

console.log(ageRoger * 2, ageRoger / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which equals 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--;
console.log(x);

//comparison operators
console.log(ageRoger > ageSarah); // >, < >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2025);*/

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge);

// const age = "18";

// if (age === 18) console.log("You are now an adult 😊 (Strict)");

// if (age == 18) console.log("You are now an adult 😊(loose)");

//== type coercion
//=== no type coercion
//always use strict

// let favouriteNumber = Number(prompt("What is your favourite number?"));

// if (favouriteNumber === 23){
//     console.log("Cool! 23 is an amazing number");
// }else if (favouriteNumber === 7){
//     console.log("7 is also a cool number");
// }else if (favouriteNumber === 9){
//     console.log("9 is also a cool number!")
// }
// else{
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favouriteNumber !== 23) console.log("Why not 23?");

// let goodVision = false;
// let driverLicense = true;

// if (driverLicense && goodVision){
//     console.log("You have a drivers license and good vision, yay! 👌")
// }
// else{
//     console.log("Get off the road 😨")
// }

// const hasDriverLicense = true; //a
// const hasGoodVision = true; //b

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision){
//     console.log("Sarah is able to drive");
// }else {
//     console.log("Someone else should drive");
// }

// const isTired = false; //c

// if (hasDriverLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive");
// }else {
//     console.log("Someone else should drive");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) /3;

// if (scoreDolphins > scoreKoalas){
//     console.log("The Dolphins win! 🐬");
// }else if (scoreKoalas > scoreDolphins){
//     console.log("The Koalas win! 🐨")
// }else {
//     console.log("Both win the trophy! 🏆");
// }

//Bonus 1 
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) /3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("The Dolphins win! 🐬");
// }else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("The Koalas win! 🐨")
// }else if(scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy! 🏆");
// }
// else{
//     console.log("Nobody wins... Womp womp 😭" );
// }

// const day = "friday";

// switch(day){ //Statement
//     case "monday":
//         console.log("Today is monday");
//     break;
//     case "wednesday":
//     case "thursday":
//         console.log("Code");
//     break;
//     case "friday":
//         console.log("prepare for weekend");
//     break;
//     default:
//         console.log("Not a valid day");
//     break;
// }
// if (day === "monday"){
//     console.log("Today is monday");
// }
// else if (day === "tuesday"){
//     console.log("Its tuesday my dudes");
// }
// else if (day === "wednesday" || day === "thursday"){
//     console.log("Code");
// }
// else if (day === "friday"){
//     console.log("Prepare for the weekend");
// }
// else{
//     console.log("That is not a day")
// }


// 3 + 4 //Expression
// 1991 //Expression
// true && false && !false //Expression

// //Expression is words, statement is a sentence 

// if (23 > 10){ //Statement 
//     const string  = "23 is bigger";
// }

//Expressions produce values 

//const age = 23;
//Ternary operator 
// age >= 18 ? console.log("I like to drink wine 🍷") : 
// console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";

// console.log(drink);

// let drink2;
// if (age >= 18){
//     drink2 = "wine 🍷";
// }
// else{
//     drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`)

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, 
// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. 
// It's not allowed to use an if...else statement (if it's easier for you, you can start with an 
// if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// let value = 200;
// const tip = value >= 50 && value <= 300 ? 15 : 20;

// console.log(value, tip,value += (value * tip/100));