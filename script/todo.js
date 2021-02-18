const KEY_TODO = "key_todo";

const formTodo = document.querySelector(".js-todo");
const inputTodo = formTodo.querySelector("input");
const listTodo = document.querySelector(".js-todo-list");
let todoItems = [];

function init() {
  loadTodoList();
  formTodo.addEventListener("submit", handleSubmit);
}
init();

function handleSubmit(event) {
  event.preventDefault();

  // create item
  const item = {
    title: inputTodo.value,
    id: Date.now(),
  };

  // save
  todoItems.push(item);
  saveTodoList();

  // show
  displayTodo(item);

  // initialize
  inputTodo.value = "";
}

function handleRemove(event) {
  const li = event.target.parentElement;
  listTodo.removeChild(li);

  const cleanTodoItems = todoItems.filter((item) => {
    return item.id.toString() !== li.id;
  });

  if (todoItems !== cleanTodoItems) {
    todoItems = cleanTodoItems;
    saveTodoList();
  }
}

function loadTodoList() {
  const savedItems = localStorage.getItem(KEY_TODO);
  if (savedItems !== null) {
    const parsedItems = JSON.parse(savedItems);
    parsedItems.forEach((item) => {
      displayTodo(item);
      todoItems.push(item);
    });
  }
}

function saveTodoList() {
  localStorage.setItem(KEY_TODO, JSON.stringify(todoItems));
}

function displayTodo(item) {
  const li = document.createElement("li");
  const spanItem = document.createElement("span");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";

  li.id = item.id;
  spanItem.textContent = item.title;
  inputCheck.addEventListener("click", handleRemove);

  li.appendChild(inputCheck);
  li.appendChild(spanItem);
  listTodo.appendChild(li);
}
