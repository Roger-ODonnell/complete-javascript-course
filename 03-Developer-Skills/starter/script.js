// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//What is temperature amplitude? Answer: Difference between highest and lowest temp
//How to compute the max and min temperatures?
// - What's a sensor error? and what to do?

//Breaking into sub problems.
// - How to ignore errors
// - Find max value in temp array
// - Find min value in temp array
// - subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//Problem 2
//function should now recieve 2 arrays of temperatures

//1) understanding the problem
// - with 2 arrays, should we implement the functionality twice? No merge two arrays.

//2)
// - Merge two arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius')),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// //A) IDENTIFY
// console.log(amplitudeBug);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}C ... in ${i + 1} days`;
  }

  return str;
};

const testData = [17, 21, 23];
console.log(printForcast(testData));
