let diceObj = [
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
];

// Scoresheet
// let scoreSheet = [
//   {
//     ones: null,
//     twos: null,
//     threes: null,
//     fours: null,
//     fives: null,
//     sixes: null,
//   },
//   {
//     threeOfAKind: null,
//     fourOfAKind: null,
//     fullHouse: null,
//     smallStraight: null,
//     largeStraight: null,
//     yahtzee: null,
//     chance: null,
//   },
//   {
//     upperTotal: null,
//     bonus: null,
//     upperGrandTotal: null,
//     lowerGrandTotal: null,
//     gameGrandTotal: null,
//   },
// ];

//* // Scoresheet elements
// let onesScoreDisp = document.getElementById("onesScoreDisp");
// let twosScoreDisp = document.getElementById("twosScoreDisp");
// let threesScoreDisp = document.getElementById("threesScoreDisp");
// let foursScoreDisp = document.getElementById("foursScoreDisp");
// let fivesScoreDisp = document.getElementById("fivesScoreDisp");
// let sixesScoreDisp = document.getElementById("sixesScoreDisp");
// let upperTotalDisp = document.getElementById("upperTotalDisp");
// let bonusDisp = document.getElementById("bonusDisp");
// let upperGrandTotalDisp = document.getElementById("upperGrandTotalDisp");
// let threeOfKindScoreDisp = document.getElementById("threeOfKindScoreDisp");
// let fourOfKindScoreDisp = document.getElementById("fourOfKindScoreDisp");
// let fullHouseScoreDisp = document.getElementById("fullHouseScoreDisp");
// let smallStraightScoreDisp = document.getElementById("smallStraightScoreDisp");
// let largeStraightScoreDisp = document.getElementById("largeStraightScoreDisp");
// let yahtzeeScoreDisp = document.getElementById("yahtzeeScoreDisp");
// let chanceScoreDisp = document.getElementById("chanceScoreDisp");
// let upperGrandTotalDisp2 = document.getElementById("upperGrandTotalDisp2");
// let lowerGrandTotalDisp = document.getElementById("lowerGrandTotalDisp");
// let gameGrandTotalDisp = document.getElementById("gameGrandTotalDisp");

// let scoreCell = document.getElementsByClassName("scoreCell");
// let totalCell = document.getElementsByClassName("totalCell");
//*

// Dice lements

let diceOneDisp = document.getElementById("diceOneDisp");
let diceTwoDisp = document.getElementById("diceTwoDisp");
let diceThreeDisp = document.getElementById("diceThreeDisp");
let diceFourDisp = document.getElementById("diceFourDisp");
let diceFiveDisp = document.getElementById("diceFiveDisp");
let dice = document.getElementsByClassName("dice");
let diceDisp = document.getElementsByClassName("diceDisp");

// Button elements
let holdButtons = document.getElementsByClassName("holdButtons");
let rollButton = document.getElementById("rollButton");

// Message element
let message = document.getElementById("message");

// Global variables
let diceValueArray = [];
let rollCount = 0;
let scoreSubmitted = true;
let gameFinished;

function diceRoll() {
  rollCount++;
  if (rollCount === 1) {
    rollingState();
  }

  if (rollCount <= 3) {
    diceValueArray = [];
    for (let i = 0; i < diceObj.length; i++) {
      if (diceObj[i].hold == false) {
        diceObj[i].currentValue = Math.floor(Math.random() * 6 + 1);
      }
      diceValueArray.push(diceObj[i].currentValue);
      diceValueArray.sort((a, b) => a - b);
    }

    diceOneDisp.textContent = diceObj[0].currentValue;
    diceTwoDisp.textContent = diceObj[1].currentValue;
    diceThreeDisp.textContent = diceObj[2].currentValue;
    diceFourDisp.textContent = diceObj[3].currentValue;
    diceFiveDisp.textContent = diceObj[4].currentValue;
  }

  messageDisplay();
}

function preRollState() {
  // Remove's the hold class from any dice and resets the dice hold value.
  for (let i = 0; i < dice.length; i++) {
    dice[i].classList.remove("hold");
  }
  for (let i = 0; i < diceObj.length; i++) {
    diceObj[i].hold = false;
  }
}

function rollingState() {
  for (let i = 0; i < holdButtons.length; i++) {
    holdButtons[i].removeAttribute("disabled", "");
  }
}

function messageDisplay() {
  //
  if (rollCount === 1) {
    message.textContent = "Nog 2 keer";
  } else if (rollCount === 2) {
    message.textContent = "Nog 1 keer ";
  } else if (rollCount === 3) {
    message.textContent = "Voer je resultaten in";
  }
}

function toggleHold(key, holdElementId) {
  let clickedElement = document.getElementById(holdElementId);

  diceObj[key].hold = !diceObj[key].hold;
  if (diceObj[key].hold === true) {
    clickedElement.classList.add("hold");
  } else {
    clickedElement.classList.remove("hold");
  }
}
