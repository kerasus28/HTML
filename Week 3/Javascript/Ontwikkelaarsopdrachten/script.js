// const age = 18;
// const birthyear = 1988;
// switch (true) {
//   case getResult(age, birthyear):
//     console.log("Great!");
//     break;
//   default:
//     console.log("Vos!");
// }
// function getResult(age, birthyear) {
//   return age >= 18 && String(birthyear).includes("88");
// }

/******
 * Antwoord is Great! omdat hij boven de 18 is en de birthyear komt ook overeen
 */

const age = 1;

if (age >= 18) {
  console.log("Great!");
} else if (age >= 12) {
  console.log("Bit great!");
} else {
  console.log("Not so great!");
}
