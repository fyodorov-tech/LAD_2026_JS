export function createLayout() {
  /* === HEADER === */
  /* Page header */
  const header = document.createElement("header");
  header.classList.add("header");

  /* Header container */
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("container");

  /* Header content wrapper */
  const headerInner = document.createElement("div");
  headerInner.classList.add("header__inner");
  headerInner.innerHTML = `<span class="header__logo">My To DO</span>`;

  headerContainer.append(headerInner);
  header.append(headerContainer);

  /* === MAIN === */
  /* Page main */
  const main = document.createElement("main");
  main.classList.add("main");

  /* Main container */
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  /* Main content wrapper */
  const mainInner = document.createElement("div");
  mainInner.classList.add("main__inner");

  /* === TO DO COMPONENTS === */
  /* Wrapper for input + button */
  const todo = document.createElement("div");
  todo.classList.add("todo");

  /* Input field for new task name */
  const todoInput = document.createElement("input");
  todoInput.classList.add("todo__input");
  todoInput.placeholder = "Add a task...";

  /* Button to add new task */
  const todoBtn = document.createElement("button");
  todoBtn.classList.add("todo__btn");
  todoBtn.type = "button";
  todoBtn.textContent = "Add";

  /* List container for tasks */
  const taskList = document.createElement("ul");
  taskList.classList.add("tasks");

  /* Empty state message (shown when no tasks exist) */
  const empty = document.createElement("div");
  empty.classList.add("todo__empty");
  empty.textContent = "No tasks yet!";

  todo.append(todoInput, todoBtn);
  mainInner.append(todo, taskList, empty);
  mainContainer.append(mainInner);
  main.append(mainContainer);

  document.body.append(header, main);

  return {
    todoInput,
    todoBtn,
    taskList,
    empty,
  };
}
