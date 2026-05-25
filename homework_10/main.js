/* Task model */
class Task {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.createdDate = new Date();
  }
}

class TaskRepository {
  static #key = "tasks";
  static #tasks = [];
  static #initialized = false;

  static #init() {
    const raw = localStorage.getItem(this.#key);
    const data = raw ? JSON.parse(raw) : [];

    this.#tasks = data.map(this.toTask);
    this.#initialized = true;
  }

  static #ensureInit() {
    if (!this.#initialized) {
      this.#init();
    }
  }

  static getAll() {
    this.#ensureInit();
    return this.#tasks;
  }

  static add(task) {
    this.#ensureInit();
    this.#tasks.push(task);
    this.#save();
  }

  static removeById(id) {
    this.#ensureInit();
    this.#tasks = this.#tasks.filter(task => task.id !== id);
    this.#save();
  }

  static clear() {
    this.#tasks = [];
    this.#initialized = false;
    localStorage.removeItem(this.#key);
  }

  static #save() {
    const JSONtasks = JSON.stringify(this.#tasks);
    localStorage.setItem(this.#key, JSONtasks);
  }

  static toTask(obj) {
    const task = new Task(obj.name);
    task.id = obj.id;
    task.createdDate = new Date(obj.createdDate);
    return task;
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

function createTaskView(task) {
  const li = document.createElement("li");
  li.classList.add("task");
  li.textContent = task.name;
  li.dataset.id = task.id;

  return li;
}

/* === DOM OPERATIONS === */
/* Create and append task element to DOM */
function addTaskDOM(task) {
  const li = createTaskView(task);
  tasksList.append(li);
}

/* Remove task element from DOM by id*/
function removeTaskDOM(id) {
  const li = tasksList.querySelector(`[data-id="${id}"]`);
  if (li) {
    li.remove();
  }
}

function handleAddTask() {
  const value = todoInput.value.trim();

  if (value) {
    const task = new Task(value);
    TaskRepository.add(task);
    addTaskDOM(task);

    todoInput.value = "";
    updateEmptyState();
  }
}

function handleRemoveTask(event) {
  const li = event.target.closest(".task");

  if (li) {
    const id = li.dataset.id;
    TaskRepository.removeById(id);
    removeTaskDOM(id);
    updateEmptyState();
  }
}

/* === UI STATE === */
/* Show or hide empty state depending on whether tasks exist */
function updateEmptyState() {
  const isEmpty = TaskRepository.getAll().length === 0;

  tasksList.classList.toggle("hidden", isEmpty);
  empty.classList.toggle("hidden", !isEmpty);
}

/* Render all tasks from state (initial render) */
function renderTasks() {
  tasksList.innerHTML = "";

  TaskRepository.getAll().forEach(task => {
    addTaskDOM(task);
  });
}

/* === EVENT BINDING === */
/* Bind all UI event listeners */
function bindEvents() {
  /* Handle click for adding new task */
  todoBtn.addEventListener("click", handleAddTask);

  /* Handle Enter key for adding new task */
  todoInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  });

  /* Handle Escape key to clear input */
  todoInput.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      todoInput.value = "";
    }
  });

  /* Handle task removal (event delegation) */
  tasksList.addEventListener("click", handleRemoveTask);
}

/* === APP INITIALIZATION === */
function initApp() {
  renderTasks();
  bindEvents();
  updateEmptyState();
}

initApp();
