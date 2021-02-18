const KEY_NAME = "key_name";

const formQueryName = document.querySelector(".js-form");
const inputName = formQueryName.querySelector("input");
const txtGreeting = document.querySelector(".js-greeting");

function init() {
  loadName();
}
init();

function loadName() {
  const currentName = localStorage.getItem(KEY_NAME);
  if (currentName === null) {
    askForName();
  } else {
    greet(currentName);
  }
}

function askForName() {
  formQueryName.classList.remove("display-none");
  txtGreeting.classList.add("display-none");
  formQueryName.addEventListener("submit", handleSubmit);
}

function handleSubmit(handle) {
  handle.preventDefault();
  const userName = inputName.value;
  localStorage.setItem(KEY_NAME, userName);
  greet(userName);
}

function greet(name) {
  formQueryName.classList.add("display-none");
  txtGreeting.classList.remove("display-none");
  txtGreeting.textContent = `Hello, ${name}`;
}
