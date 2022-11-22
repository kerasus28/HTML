//generate random numbers
let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

function gentext() {
  var operators = ["plus", "min", "keer"];
  var para = (document.querySelector("operator").textContent = operators);
  para.innerHTML = operators[Math.floor(Math.random() * operators.length)];
}

//get the answer
let total = firstNumber + secondNumber;

//display numbers and operator
let primary = document.getElementById("primary-number");
primary.innerHTML = `${firstNumber}`;

let secondary = document.getElementById("secondary-number");
secondary.innerHTML = `${secondNumber}`;

//get guess from user
let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let guess = document.getElementById("guess").value;
  guess = Number(guess);
  //check answer
  if (guess === total) {
    alert("Correct");
    window.location.reload();
  } else {
    alert("Sorry. Juiste antwoord was " + total + ".");
    window.location.reload();
  }
});
