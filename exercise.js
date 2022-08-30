//First exercise - split the name into different parts so it becomes an array.
const fullName = "Peter Heronimous Lind";
const nameArray = fullName.split(" ");

console.log(nameArray);
//------------------------------------------//

//second exercise - make the t in peter capitalized.
const firstName = "peter";
const capitalT = firstName.charAt(2).toUpperCase();
const firstTwoLetters = firstName.substring(0, 2);
const lastTwoLetters = firstName.substring(3, 5);
const peterCapitalT = firstTwoLetters + capitalT + lastTwoLetters;

console.log(peterCapitalT);
//------------------------------------------//

//third exercise - make the first letter in peter capitalized.
const firstLetterCap = firstName.charAt(0).toUpperCase() + firstName.substring(1);

console.log(firstLetterCap);
//------------------------------------------//
