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

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageGulsah = calculateAge(1990);
// var ageM = calculateAge(1994);
// var ageJane = calculateAge(1986);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// }
// yearsUntilRetirement(1990, "Gulsah");
// yearsUntilRetirement(2001, "Burak");
// yearsUntilRetirement(1974, "Ismael");

/***********************************************
 * Arrays
 */

// Initialize ne array
// var names = ["john", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";
// console.log(names);

// //Diferent data types

// var john = ["John", "Smith", 1990, "Teacher", false];

// john.push("blue");
// john.unshift("Mr.");
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John is a designer";
// console.log(isDesigner);

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2]),
// ];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, finalValues);

/******************************
 * objects and properties
 */

//object literal
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   brithYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emeliy"],
//   job: "teacher",
//   isMarried: false,
// };
// console.log(john.firstName);
// console.log(john["lastName"]);
// var x = "brithYear";
// console.log(john[x]);

// john, (job = "designer");
// john["isMarried"] = true;
// console.log(john);

// //new Object syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.brithYear = 1969;
// jane["lastName"] = "smith";

// console.log(jane);

/************************************
 * Objects and methods
 */

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   },
// };

// john.calcAge();
// console.log(john);

// var john = {
//   fullName: "John Smith",
//   mass: 84,
//   height: 1.85,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// var mark = {
//   fullName: "Mark Miller",
//   mass: 79,
//   height: 1.79,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(john, mark);

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + " has a higher BMI of " + john.bmi);
// } else {
//   mark.bmi > john.bmi;
//   console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
// }

// let x = 5 - "2s" + "1";
// if (x) {
//   console.log("Waar");
// } else {
//   console.log("Niet waar");
// }

// const age = 5;
// if (age === 5) {
//   console.log("het begin van het begin");
// } else if (age === "5") {
//   console.log("het begin van het begin - nog steeds");
// } else if (age == 5) {
//   console.log("ok");
// } else {
//   console.log("What just happened");
// }

const junkfood = false;
const healthyFood = true;

if (!junkfood && !healthyFood) {
  console.log("Do you eat??");
} else if (junkfood) {
  console.log("It would be a mistake to conclude that i know what is false...");
} else {
  console.log("I want JUNKFOOD!");
}
