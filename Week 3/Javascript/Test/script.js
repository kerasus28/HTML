// var firstName = "John";
// var age = 28;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// //variable mutation
// age = "twenty eight";
// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// var lastName = prompt("What is his last Name?");
// console.log(firstName + " " + lastName);

/* Basic operators */

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(now + 2);

// //Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //multiple operators
// var isFullAge = now - yearJohn >= fullAge;

// console.log(isFullAge);
// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(average);

// // Multiple assignments

// var x, y;
// x = (3 + 5) * 4 - 6;
// console.log(x);

// var heightJohn = 1.82;
// var weightJohn = 84.4;

// var heightMark = 1.88;
// var weightMark = 82.9;

// var BMI = weightJohn / (heightJohn * heightJohn);

// console.log(BMI);

// if statements

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will marry soon");
// }

// var isMarried = false;

// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will marry soon");
// }

// Boolean logic

// var firstName = "John";
// var age = 13;

// if (age < 13) {
//   console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else {
//   console.log(firstName + " is a man");
// }

// The ternary operator and switch statement

// var firstName = "John";
// var age = 19;

// age >= 18
//   ? console.log(firstName + " drinks beer")
//   : console.log(firstName + " drinks juice");

// var drink = age >= 18 ? "beer" : "juice";

// console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

// switch statement

// var job = "teacher";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches kids how to code");
//     break;
//   case "driver":
//     console.log(firstName + " drives a taxi in Amsterdam");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites");
//     break;
//   default:
//     console.log(firstName + " is broke");
// }

// age = 37;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager");
//     break;
//   default:
//     console.log(firstName + " john is a man");
// }

/*********************************************************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '',NaN
// Truthy values: not Falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//   console.log("variable is defined");
// } else {
//   console.log("Variable has NOT defined");
// }

//functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1994);
var ageJane = calculateAge(1986);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years");
  } else {
    console.log(firstName + " is already retired");
  }
}
yearsUntilRetirement(1990, "John");
yearsUntilRetirement(2001, "Burak");
yearsUntilRetirement(1974, "Ismael");
