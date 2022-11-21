//Random nummer generator

const randomNum1 = Math.trunc(Math.random() * 10) + 1;
const randomNum2 = Math.trunc(Math.random() * 10) + 1;

document.querySelector(".input1").textContent = randomNum1;
document.querySelector(".input2").textContent = randomNum2;

//Random operator generator

let operator = ["-", "+", "*", "%"];
let randomOp = operator[Math.floor(Math.random() * operator.length)];

document.querySelector(".operator").textContent = randomOp;

let antwoord = randomNum1 + randomNum2;

// function game() {
//   var user = document.getElementsByClassName(".check").value;
//   if (user == antwoord) {
//     // document.getElementsByClassName(".bericht").textContent = "Goed gedaan";
//     document.querySelector(".bericht").addEventListener.textContent =
//       "Goed gedaan klootzak";
//   }
// }

document.querySelector(".check").addEventListener("click", function () {
  const antwoord = number(document.querySelector(".guess").value);
});

document.querySelector(".check").addEventListener("click", function () {
  var user = document.getElementsByClassName(".check").value;
  if (user == antwoord) {
    // document.getElementsByClassName(".bericht").textContent = "Goed gedaan";
    document.querySelector(".bericht").addEventListener.textContent =
      "Goed gedaan klootzak";
  }
});
