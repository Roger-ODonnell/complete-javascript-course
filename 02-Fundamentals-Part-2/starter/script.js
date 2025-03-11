"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive 😊')

function log(log) {
  console.log(log);
}

// function fruitProcessor (apples, oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//###function declaration
// function calcAge1 (birthYear){
//     return 2037 - birthYear;
// }

// //###function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//    // return retirement;
//    return `${firstName} retires in ${retirement} years.`
// }
// log(yearsUntilRetirement(1991, "Roger"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// log(yearsUntilRetirement(1991, "Bob"));
// log(yearsUntilRetirement(1970, "Rob"));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = avgScore(85, 54, 41);
// const scoreKoalas = avgScore(23, 34, 27);

// function checkWinner(dolphinsScore, koalaScore) {
//   if (dolphinsScore > koalaScore * 2) {
//     console.log(
//       `The Dolphins win 🎉, their score was ${dolphinsScore} while the koala's only scored ${koalaScore}`
//     );
//   } else if (koalaScore > dolphinsScore * 2) {
//     console.log(
//       `The Koala's win 🎉, their score was ${koalaScore} while the Dolphins's only scored ${dolphinsScore}`
//     );
//   } else {
//     console.log(
//       "Nobody won as neither score was 2 or more times greater than the other ☹️"
//     );
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jane";
// console.log(friends);

// const firstName = "Roger";
// const roger = [firstName, "Odonnell", 2037 - 1991, "teacher", friends];
// console.log(roger);

// //exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [19990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1])];
// calcAge[years.length - 1];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// //Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //Remove elements
// friends.pop(); //Removes last element of array
// const popped = friends.pop(); //Removes last element of array
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.push(23);
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));
// console.log(friends.includes(23));

// friends.push("Peter");

// if (friends.includes("Peter")) {
//   console.log("You have a friend named peter");
//   console.log(friends);
// }

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

const tipCal = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2])];

const totals = [
  tipCal(bills[0]) + bills[0],
  tipCal(bills[1]) + bills[1],
  tipCal(bills[2]) + bills[2],
];

console.log(bills);
console.log(totals);
