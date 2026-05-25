import { Task } from "../models/task.js";
import { TaskRepository } from "../repositories/task-repository.js";

export class TaskController {
  #todoInput;
  #todoBtn;
  #taskList;
  #empty;

  constructor(ui) {
    this.#todoInput = ui.todoInput;
    this.#todoBtn = ui.todoBtn;
    this.#taskList = ui.taskList;
    this.#empty = ui.empty;
  }

  init() {
    this.#render();
    this.#bindEvents();
    this.#updateEmpty();
  }

  #render() {
    this.#taskList.innerHTML = "";

    TaskRepository.getAll().forEach(task => {
      this.#addTaskDOM(task);
    });
  }

  #addTaskDOM(task) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.name;
    li.dataset.id = task.id;

    this.#taskList.append(li);
  }

  #removeTaskDOM(id) {
    const li = this.#taskList.querySelector(`[data-id="${id}"]`);
    if (li) {
      li.remove();
    }
  }

  #updateEmpty() {
    const isEmpty = TaskRepository.getAll().length === 0;

    this.#taskList.classList.toggle("hidden", isEmpty);
    this.#empty.classList.toggle("hidden", !isEmpty);
  }

  #bindEvents() {
    /* Handle click for adding new task */
    this.#todoBtn.addEventListener("click", this.#handleAddTask);

    /* Handle Enter key for adding new task */
    this.#todoInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        this.#handleAddTask();
      }
    });

    /* Handle Escape key to clear input */
    this.#todoInput.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        this.#todoInput.value = "";
      }
    });

    /* Handle task removal (event delegation) */
    this.#taskList.addEventListener("click", this.#handleRemoveTask);
  }

  #handleAddTask = () => {
    const value = this.#todoInput.value.trim();

    if (!value) {
      return;
    }

    const task = new Task(value);

    TaskRepository.add(task);
    this.#addTaskDOM(task);

    this.#todoInput.value = "";
    this.#updateEmpty();
  };

  #handleRemoveTask = event => {
    const li = event.target.closest(".task");

    if (li) {
      const id = li.dataset.id;
      TaskRepository.removeById(id);
      this.#removeTaskDOM(id);
      this.#updateEmpty();
    }
  };
}
