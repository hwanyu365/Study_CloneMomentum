// hello world
alert("Hello, Javascript!!");

// change title
const spanTitle = document.getElementById("title");
spanTitle.textContent = "Hello, Javascript!";

// add listener to change text of span
const spanPlayer = document.querySelector("#player");
spanPlayer.addEventListener("click", updateName);
function updateName() {
  let name = prompt("Enter a new name");
  spanPlayer.textContent = "Player 1: " + name;
  console.log(spanPlayer.textContent);
}

// string
let playerName = spanPlayer.textContent.replace("Player 1: ", "");
console.log(`Hello, ${playerName}!`);

// create calcuator object like as console
const calculator = {
  add: function (...nums) {
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
      ret += nums[i];
    }
    return ret;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (...nums) {
    let ret = nums[0];
    for (let i = 1; i < nums.length; i++) {
      ret *= nums[i];
    }
    return ret;
  },
  div: function (a, b) {
    return a / b;
  },
  mod: function (a, b) {
    return a % b;
  },
};

console.log(console);
console.log(
  calculator,
  calculator.add(2, 4, 3),
  calculator.sub(2, 4),
  calculator.mul(2, 4, 3),
  calculator.div(2, 4),
  calculator.mod(2, 4)
);

// DOM
// add event listener on window
function changeFontSize() {
  spanTitle.style.fontSize =
    90 * (window.innerWidth / window.outerWidth) + "px";
}
window.addEventListener("resize", changeFontSize);

// add event listener on span
spanTitle.addEventListener("click", function () {
  spanTitle.style.color = ColorUtils.random();

  // const newClass = "title-turquoise";
  // if (spanTitle.classList.contains(newClass)) {
  //   spanTitle.classList.remove(newClass);
  // } else {
  //   spanTitle.classList.add(newClass);
  // }

  // const newClass = "title-turquoise";
  // spanTitle.classList.toggle(newClass);
});
