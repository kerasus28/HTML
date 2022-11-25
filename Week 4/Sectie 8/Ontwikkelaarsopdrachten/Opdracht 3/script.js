let diceObj = [
  { currentValue: 0 },
  { currentValue: 0 },
  { currentValue: 0 },
  { currentValue: 0 },
  { currentValue: 0 },
];

//Scoresheet
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

// Scoresheet elements
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
