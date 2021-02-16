let a = 1;
let b = 4;
console.log(a + b);

let title = document.querySelector("span");
title.textContent = "Hello, Javascript!";

const para = document.querySelector("span");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
  console.log(para.textContent);
}

function createParagraph() {
  let para = document.createElement("span");
  para.textContent = "You clicked the input!";
  document.querySelector("main").appendChild(para);
}
