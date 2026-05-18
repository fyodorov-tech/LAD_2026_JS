/* 1. Создание To Do List - необходимо средствами JS создать страницу на которой будут
элементы: header содержащий заголовок страницы, контейнер с контентом страницы, поле
ввода input, список элементов, кнопка добавления To Do (Стили возможно добавлять через
CSS). */

const tasks = [];

class Task {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.createdDate = Date.now();
  }
}

/* === HEADER === */
const header = document.createElement("header");
header.classList.add("header");

document.body.append(header);

const headerContainer = document.createElement("div");
headerContainer.classList.add("container");

header.append(headerContainer);

const headerInner = document.createElement("div");
headerInner.classList.add("header__inner");

headerContainer.append(headerInner);

headerInner.innerHTML = `<span class="header__logo">My To DO</span>`;

/* === MAIN === */
const main = document.createElement("main");
main.classList.add("main");
document.body.append(main);

const mainContainer = document.createElement("div");
mainContainer.classList.add("container");
main.append(mainContainer);

const mainInner = document.createElement("div");
mainInner.classList.add("main__inner");
mainContainer.append(mainInner);

/* === TO DO COMPONENTS */
const todo = document.createElement("div");
todo.classList.add("todo");
mainInner.append(todo);

const todoInput = document.createElement("input");
todoInput.classList.add("todo__input");
todoInput.name = "todoInput";
todoInput.placeholder = "Add a task...";

const todoBtn = document.createElement("button");
todoBtn.type = "button";
todoBtn.classList.add("todo__btn");
todoBtn.textContent = "Add";
todo.append(todoInput, todoBtn);

const tasksList = document.createElement("ul");
tasksList.classList.add("tasks");
mainInner.append(tasksList);

const empty = document.createElement("div");
empty.classList.add("todo__empty");
empty.textContent = "No tasks yet!";
mainInner.append(empty);

function renderEmptyState(tasks) {
  const isEmpty = tasks.length === 0;

  tasksList.classList.toggle("hidden", isEmpty);
  empty.classList.toggle("hidden", !isEmpty);
}

function renderTasks(tasks) {
  tasksList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.name;
    tasksList.append(li);
  });
}

function render(tasks) {
  renderTasks(tasks);
  renderEmptyState(tasks);
}

render(tasks);
