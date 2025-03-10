'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive 😊')

function logger(log){
    console.log(log);
}

function fruitProcessor (apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');