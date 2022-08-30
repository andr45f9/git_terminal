"use strict";

const name = "Andrea";
const drink = "Faxekondi";

console.log(`Hello ${name},
would you like a ${drink}?`);
//---------------------------------------------//

const firstName = "Andrea";
const animalType = "cat";
const animalName = "Otto";

console.log(`My name is ${firstName}.
I have a ${animalType} called ${animalName}.`);
//---------------------------------------------//

const len = firstName.length;

console.log(`${firstName} is ${len} characters long.`);
//---------------------------------------------//

const letter = firstName[0];

console.log(`the first letter of ${firstName} is ${letter}.`);
//---------------------------------------------//

const practiceName = "Albus Percival Wulfric Brian Dumbledore";
const total = practiceName.length;
const index2 = practiceName[1];
const index6 = practiceName[6];

console.log(`The total number of characters in this name is: ${total}`);
console.log(`The second letter in this name is ${index2}.`);
console.log(`The sixth letter in this name is ${index6}.`);
//---------------------------------------------//

const str1 = "  There is   space here \n  ";
const str2 = str1.trim(); //it removes the space before and after the sentence, but not in the middle.

console.log(str1);
console.log(str2);
//---------------------------------------------//

const fullName = "Andrea Marie Roed Schack";
const lastName = fullName.substring(18);
/* const firstName = fullName.substring(0, 6); */ //Would show my first name

console.log(`_${lastName}_`);
