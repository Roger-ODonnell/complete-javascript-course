const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn, bmiMark, markHigherBMI);
