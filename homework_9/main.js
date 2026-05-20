/* application state */
const tasks = [];

/* Task model */
class Task {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.createdDate = new Date();
  }
}

/* === HEADER === */
/* Page header */
const header = document.createElement("header");
header.classList.add("header");
document.body.append(header);

/* Header container */
const headerContainer = document.createElement("div");
headerContainer.classList.add("container");
header.append(headerContainer);

/* Header content wrapper */
const headerInner = document.createElement("div");
headerInner.classList.add("header__inner");
headerContainer.append(headerInner);

headerInner.innerHTML = `<span class="header__logo">My To DO</span>`;

/* === MAIN === */
/* Page main */
const main = document.createElement("main");
main.classList.add("main");
document.body.append(main);

/* Main container */
const mainContainer = document.createElement("div");
mainContainer.classList.add("container");
main.append(mainContainer);

/* Main content wrapper */
const mainInner = document.createElement("div");
mainInner.classList.add("main__inner");
mainContainer.append(mainInner);

/* === TO DO COMPONENTS === */
/* Wrapper for input + button */
const todo = document.createElement("div");
todo.classList.add("todo");
mainInner.append(todo);

/* Input field for new task name */
const todoInput = document.createElement("input");
todoInput.classList.add("todo__input");
todoInput.name = "todoInput";
todoInput.placeholder = "Add a task...";

/* Button to add new task */
const todoBtn = document.createElement("button");
todoBtn.type = "button";
todoBtn.classList.add("todo__btn");
todoBtn.textContent = "Add";

todo.append(todoInput, todoBtn);

/* List container for tasks */
const tasksList = document.createElement("ul");
tasksList.classList.add("tasks");
mainInner.append(tasksList);

/* Empty state message (shown when no tasks exist) */
const empty = document.createElement("div");
empty.classList.add("todo__empty");
empty.textContent = "No tasks yet!";
mainInner.append(empty);

/* === STATE OPERATIONS === */
/* Add task to state */
function addTask(task) {
  tasks.push(task);
}

/* Remove task from state */
function removeTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex != -1) {
    tasks.splice(taskIndex, 1);
  }
}

/* === DOM OPERATIONS === */
/* Create and append task element to DOM */
function addTaskDOM(task) {
  const li = document.createElement("li");
  li.classList.add("task");
  li.textContent = task.name;
  li.dataset.id = task.id;
  tasksList.append(li);
}

/* Remove task element from DOM by id*/
function removeTaskDOM(id) {
  const li = tasksList.querySelector(`[data-id="${id}"]`);
  if (li) {
    li.remove();
  }
}

/* === UI STATE === */
/* Show or hide empty state depending on whether tasks exist */
function updateEmptyState() {
  const isEmpty = tasks.length === 0;

  tasksList.classList.toggle("hidden", isEmpty);
  empty.classList.toggle("hidden", !isEmpty);
}

/* Render all tasks from state (initial render) */
function renderAllTasks() {
  tasksList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.name;
    li.dataset.id = task.id;
    tasksList.append(li);
  });
}

/* === EVENT BINDING === */
function bindEvents() {
  /* Handle adding new task */
  todoBtn.addEventListener("click", function () {
    const value = todoInput.value.trim();

    if (value) {
      const task = new Task(value);
      addTask(task);
      addTaskDOM(task);

      todoInput.value = "";
      updateEmptyState();
    }
  });

  /* Handle task removal (event delegation) */
  tasksList.addEventListener("click", e => {
    const li = e.target.closest(".task");

    if (li) {
      const id = li.dataset.id;
      removeTask(id);
      removeTaskDOM(id);

      updateEmptyState();
    }
  });
}

/* === APP INITIALIZATION === */
function initApp() {
  renderAllTasks();
  bindEvents();
  updateEmptyState();
}

initApp();
