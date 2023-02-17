let diceObj = [
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
  { currentValue: 0, hold: false },
];

// Score sheet
let scoreSheet = [
  {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
  },
  {
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    yahtzee: null,
    chance: null,
  },
  {
    upperTotal: null,
    bonus: null,
    upperGrandTotal: null,
    lowerGrandTotal: null,
    gameGrandTotal: null,
  },
];

// Scoresheet DOM
let onesScoreDisp = document.getElementById("onesScoreDisp");
let twosScoreDisp = document.getElementById("twosScoreDisp");
let threesScoreDisp = document.getElementById("threesScoreDisp");
let foursScoreDisp = document.getElementById("foursScoreDisp");
let fivesScoreDisp = document.getElementById("fivesScoreDisp");
let sixesScoreDisp = document.getElementById("sixesScoreDisp");
let upperTotalDisp = document.getElementById("upperTotalDisp");
let bonusDisp = document.getElementById("bonusDisp");
let upperGrandTotalDisp = document.getElementById("upperGrandTotalDisp");
let threeOfKindScoreDisp = document.getElementById("threeOfKindScoreDisp");
let fourOfKindScoreDisp = document.getElementById("fourOfKindScoreDisp");
let fullHouseScoreDisp = document.getElementById("fullHouseScoreDisp");
let smallStraightScoreDisp = document.getElementById("smallStraightScoreDisp");
let largeStraightScoreDisp = document.getElementById("largeStraightScoreDisp");
let yahtzeeScoreDisp = document.getElementById("yahtzeeScoreDisp");
let chanceScoreDisp = document.getElementById("chanceScoreDisp");
let upperGrandTotalDisp2 = document.getElementById("upperGrandTotalDisp2");
let lowerGrandTotalDisp = document.getElementById("lowerGrandTotalDisp");
let gameGrandTotalDisp = document.getElementById("gameGrandTotalDisp");

let scoreCell = document.getElementsByClassName("scoreCell");
let totalCell = document.getElementsByClassName("totalCell");

// Dice DOM
let diceOneDisp = document.getElementById("diceOneDisp");
let diceTwoDisp = document.getElementById("diceTwoDisp");
let diceThreeDisp = document.getElementById("diceThreeDisp");
let diceFourDisp = document.getElementById("diceFourDisp");
let diceFiveDisp = document.getElementById("diceFiveDisp");
let dice = document.getElementsByClassName("dice");
let diceDisp = document.getElementsByClassName("diceDisp");

// Button DOM
let holdButtons = document.getElementsByClassName("holdButtons");
let rollButton = document.getElementById("rollButton");

// Message DOM
let message = document.getElementById("message");

// Globalvariables
let diceValueArray = [];
let rollCount = 0;
let scoreSubmitted = true;
let gameFinished;

function diceRoll() {
  rollCount++;
  scoreSubmitted = false;
  if (rollCount === 1) {
    rollingState();
  }

  // random nummer naar elke dice en word gepushed
  if (rollCount <= 3) {
    diceValueArray = [];
    for (let i = 0; i < diceObj.length; i++) {
      if (diceObj[i].hold == false) {
        diceObj[i].currentValue = Math.floor(Math.random() * 6 + 1);
      }
    }
    diceOneDisp.textContent = diceObj[0].currentValue;
    diceTwoDisp.textContent = diceObj[1].currentValue;
    diceThreeDisp.textContent = diceObj[2].currentValue;
    diceFourDisp.textContent = diceObj[3].currentValue;
    diceFiveDisp.textContent = diceObj[4].currentValue;
  }

  // wanneer de de max word gehit word de remove weggehaalt
  if (rollCount === 3) {
    // na de laatste rol word de hold wegggehaalt
    for (let i = 0; i < dice.length; i++) {
      dice[i].classList.remove("hold");
    }

    for (let i = 0; i < diceObj.length; i++) {
      diceObj[i].hold = false;
    }
  }
  messageDisplay();
}

function rollReset() {
  // reset wanneer er een score is ingevoerd

  rollCount = 0;
  if (scoreSheet[2].gameGrandTotal !== null) {
    message.textContent = "Je Score: " + scoreSheet[2].gameGrandTotal;
  } else {
    message.textContent = "Roll";
  }
}

function preRollState() {
  // word elke keer uitgevoerd wanneer een score is ingevuld

  // disable button
  for (let i = 0; i < holdButtons.length; i++) {
    holdButtons[i].setAttribute("disabled", "");
  }

  // enable button
  if (!gameFinished) {
    rollButton.removeAttribute("disabled", "");
  } else {
    rollButton.setAttribute("disabled", "");
  }

  // remove hold
  for (let i = 0; i < dice.length; i++) {
    dice[i].classList.remove("hold");
  }
  for (let i = 0; i < diceObj.length; i++) {
    diceObj[i].hold = false;
  }
}

function rollingState() {
  // Acctivatie hold na eerste keer rol klik

  for (let i = 0; i < holdButtons.length; i++) {
    holdButtons[i].removeAttribute("disabled", "");
  }
}

function messageDisplay() {
  // tekst
  if (rollCount === 1) {
    message.textContent = "NOG 2";
  } else if (rollCount === 2) {
    message.textContent = "NOG 1";
  } else if (rollCount === 3) {
    message.textContent = "Vul je score in!";
  }
}

function newGame() {
  // Reset alles

  rollCount = 0;
  gameFinished = false;
  scoreSubmitted = true;

  // Reset scoresheet
  for (let i = 0; i < scoreCell.length; i++) {
    scoreCell[i].textContent = "...";
  }

  // Reset totaal
  for (let i = 0; i < totalCell.length; i++) {
    totalCell[i].textContent = "";
  }

  // Reset object
  for (var i = 0; i < scoreSheet.length; i++) {
    for (var prop in scoreSheet[i]) {
      if (scoreSheet[i][prop] !== null) {
        scoreSheet[i][prop] = null;
      }
    }
  }

  // Reset nummers
  for (let i = 0; i < diceDisp.length; i++) {
    diceDisp[i].textContent = "1";
  }

  message.textContent = "Druk op ROLL";

  preRollState();
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

function calculateUpper(argA, argB, argC) {
  if (!scoreSubmitted && argA === null) {
    argA = 0;
    diceObj.forEach((item) => {
      if (item.currentValue === argB) {
        argA += argB;
      }
    });
    argC.textContent = argA;
    calculationEnd();
  }
}

function calculateThreeOfKind() {
  if (!scoreSubmitted && scoreSheet[1].threeOfAKind === null) {
    if (
      diceValueArray[0] === diceValueArray[1] &&
      diceValueArray[1] === diceValueArray[2]
    ) {
      for (let i = 0; i < diceObj.length; i++) {
        scoreSheet[1].threeOfAKind += diceObj[i].currentValue;
      }
    } else if (
      diceValueArray[1] === diceValueArray[2] &&
      diceValueArray[2] === diceValueArray[3]
    ) {
      for (let i = 0; i < diceObj.length; i++) {
        scoreSheet[1].threeOfAKind += diceObj[i].currentValue;
      }
    } else if (
      diceValueArray[2] === diceValueArray[3] &&
      diceValueArray[3] === diceValueArray[4]
    ) {
      for (let i = 0; i < diceObj.length; i++) {
        scoreSheet[1].threeOfAKind += diceObj[i].currentValue;
      }
    } else {
      scoreSheet[1].threeOfAKind = 0;
    }
    threeOfKindScoreDisp.textContent = scoreSheet[1].threeOfAKind;
    calculationEnd();
  }
}

function calculateFourOfKind() {
  if (!scoreSubmitted && scoreSheet[1].fourOfAKind === null) {
    if (
      diceValueArray[1] === diceValueArray[2] &&
      diceValueArray[2] === diceValueArray[3]
    ) {
      if (
        diceValueArray[2] === diceValueArray[0] ||
        diceValueArray[2] === diceValueArray[4]
      ) {
        for (let i = 0; i < diceObj.length; i++) {
          scoreSheet[1].fourOfAKind += diceObj[i].currentValue;
        }
      } else {
        scoreSheet[1].fourOfAKind = 0;
      }
    } else {
      scoreSheet[1].fourOfAKind = 0;
    }
    fourOfKindScoreDisp.textContent = scoreSheet[1].fourOfAKind;
    calculationEnd();
  }
}

function calculateFullHouse() {
  let comboOne = false;
  let comboTwo = false;
  if (!scoreSubmitted && scoreSheet[1].fullHouse === null) {
    if (diceValueArray[0] === diceValueArray[1]) {
      if (
        diceValueArray[2] === diceValueArray[3] &&
        diceValueArray[3] === diceValueArray[4]
      ) {
        if (diceValueArray[1] !== diceValueArray[2]) {
          comboOne = true;
        }
      }
    }
    if (
      diceValueArray[0] === diceValueArray[1] &&
      diceValueArray[1] === diceValueArray[2]
    ) {
      if (diceValueArray[3] === diceValueArray[4]) {
        if (diceValueArray[2] !== diceValueArray[3]) {
          comboTwo = true;
        }
      }
    }
    if (comboOne || comboTwo) {
      scoreSheet[1].fullHouse = 25;
    } else {
      scoreSheet[1].fullHouse = 0;
    }
    fullHouseScoreDisp.textContent = scoreSheet[1].fullHouse;
    calculationEnd();
  }
}

function calculateSmallStraight() {
  let status = false;
  let possibleSmallStraights = [
    [1, 1, 2, 3, 4],
    [1, 2, 2, 3, 4],
    [1, 2, 3, 3, 4],
    [1, 2, 3, 4, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 6],
    [2, 2, 3, 4, 5],
    [2, 3, 3, 4, 5],
    [2, 3, 4, 4, 5],
    [2, 3, 4, 5, 5],
    [1, 3, 4, 5, 6],
    [2, 3, 4, 5, 6],
    [3, 3, 4, 5, 6],
    [3, 4, 4, 5, 6],
    [3, 4, 5, 5, 6],
    [3, 4, 5, 6, 6],
  ];
  if (!scoreSubmitted && scoreSheet[1].smallStraight === null) {
    for (let i = 0; i < possibleSmallStraights.length; i++) {
      if (
        JSON.stringify(diceValueArray) ===
        JSON.stringify(possibleSmallStraights[i])
      ) {
        status = true;
      }
    }
    if (status === true) {
      scoreSheet[1].smallStraight = 30;
    } else {
      scoreSheet[1].smallStraight = 0;
    }
    smallStraightScoreDisp.textContent = scoreSheet[1].smallStraight;
    calculationEnd();
  }
}

function calculateLargeStraight() {
  let status = false;
  let possibleLargeStraights = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ];
  if (!scoreSubmitted && scoreSheet[1].largeStraight === null) {
    possibleLargeStraights.forEach((item) => {
      if (JSON.stringify(diceValueArray) === JSON.stringify(item)) {
        status = true;
      }
    });
    if (status === true) {
      scoreSheet[1].largeStraight = 40;
    } else {
      scoreSheet[1].largeStraight = 0;
    }
    largeStraightScoreDisp.textContent = scoreSheet[1].largeStraight;
    calculationEnd();
  }
}

function calculateYahtzee() {
  let status = true;
  if (!scoreSubmitted && scoreSheet[1].yahtzee === null) {
    for (let i = 1; i < diceValueArray.length; i++) {
      if (diceValueArray[i - 1] !== diceValueArray[i]) {
        status = false;
        break;
      }
    }
    if (status) {
      scoreSheet[1].yahtzee = 50;
    } else {
      scoreSheet[1].yahtzee = 0;
    }
    yahtzeeScoreDisp.textContent = scoreSheet[1].yahtzee;
    calculationEnd();
  }
}

function calculateChance() {
  if (!scoreSubmitted && scoreSheet[1].chance === null) {
    for (let i = 0; i < diceObj.length; i++) {
      scoreSheet[1].chance += diceObj[i].currentValue;
    }
    chanceScoreDisp.textContent = scoreSheet[1].chance;
    calculationEnd();
  }
}

function calculationEnd() {
  scoreSubmitted = true;
  totals();
  rollReset();
  preRollState();
}

function totals() {
  let upperScoreArray = Object.values(scoreSheet[0]);
  let lowerScoreArray = Object.values(scoreSheet[1]);

  let isScoreMissingUpper = upperScoreArray.includes(null);
  let isScoreMissingLower = lowerScoreArray.includes(null);
  let reducer = (accumulator, current) => accumulator + current;

  //calculate total upper
  if (!isScoreMissingUpper) {
    scoreSheet[2].upperTotal = upperScoreArray.reduce(reducer);
    if (scoreSheet[2].upperTotal >= 63) {
      scoreSheet[2].bonus = 35;
    } else {
      scoreSheet[2].bonus = 0;
    }
    scoreSheet[2].upperGrandTotal =
      scoreSheet[2].upperTotal + scoreSheet[2].bonus;

    upperTotalDisp.textContent = scoreSheet[2].upperTotal;
    bonusDisp.textContent = scoreSheet[2].bonus;
    upperGrandTotalDisp.textContent = scoreSheet[2].upperGrandTotal;
    upperGrandTotalDisp2.textContent = scoreSheet[2].upperGrandTotal;
  }

  //lower score
  if (!isScoreMissingLower) {
    scoreSheet[2].lowerGrandTotal = lowerScoreArray.reduce(reducer);
    lowerGrandTotalDisp.textContent = scoreSheet[2].lowerGrandTotal;
  }

  //final
  if (
    scoreSheet[2].upperGrandTotal !== null &&
    scoreSheet[2].lowerGrandTotal !== null
  ) {
    scoreSheet[2].gameGrandTotal =
      scoreSheet[2].upperGrandTotal + scoreSheet[2].lowerGrandTotal;
    gameGrandTotalDisp.textContent = scoreSheet[2].gameGrandTotal;

    gameFinished = true;

    messageDisplay();
  }
}
