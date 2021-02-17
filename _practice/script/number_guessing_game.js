const MAX_CHANCE = 10;

const inputGuess = document.querySelector("#container-answer__input");
const btnGuess = document.querySelector("#container-answer__btn-submit");

const containerResult = document.querySelector(".container-result");
const spanPrevGuess = document.querySelector("#container-result__prev_guesses");
const spanResult = document.querySelector("#container-result__result");
const spanReason = document.querySelector("#container-result__reason");
const btnNewGame = document.querySelector("#container-result__btn-restart");

var goalNumber;
var countGuess = 0;

var xx = { name: "cho", age: 33 };
var yy = ["3", "2"];

console.log(typeof xx);
console.log(typeof yy);

function checkGuess() {
  countGuess++;
  var userGuess = Number(inputGuess.value);
  console.log("countGuess? " + countGuess + ", userGuess? " + userGuess);

  if (countGuess === 1) {
    containerResult.style.display = "flex";
  }

  // set spanPrevGuess
  spanPrevGuess.textContent += " " + userGuess;

  // set spanResult & spanReason
  if (userGuess === goalNumber) {
    spanResult.style.backgroundColor = "green";
    spanResult.textContent = "Congratulations! You got it right!";
    spanReason.style.display = "none";
    endGame();
  } else if (countGuess === MAX_CHANCE) {
    spanResult.style.backgroundColor = "red";
    spanResult.textContent = "!!!GAME OVER!!!";
    endGame();
  } else if (userGuess > goalNumber) {
    spanResult.style.backgroundColor = "red";
    spanResult.textContent = "Wrong!!";
    spanReason.textContent = "Last guess was too high!";
  } else {
    spanResult.style.backgroundColor = "red";
    spanResult.textContent = "Wrong!!";
    spanReason.textContent = "Last guess was too low!";
  }

  inputGuess.value = "";
  inputGuess.focus();
}

function endGame() {
  inputGuess.disabled = true;
  btnGuess.disabled = true;
  spanReason.style.display = "none";
  btnNewGame.style.display = "flex";
}

function resetGame() {
  // reset views
  containerResult.style.display = "none";
  spanPrevGuess.textContent = "Previous guesses:";
  spanReason.style.display = "";
  btnNewGame.style.display = "none";
  inputGuess.disabled = false;
  btnGuess.disabled = false;

  // reset variable
  goalNumber = Math.floor(Math.random() * 100) + 1;
  countGuess = 0;
  userGuess = "";

  console.log("goalNumber? " + goalNumber);
}

btnGuess.addEventListener("click", checkGuess);
btnNewGame.addEventListener("click", resetGame);
resetGame();
