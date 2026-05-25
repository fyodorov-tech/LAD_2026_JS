import { Task } from "../models/task.js";
import { TaskRepository } from "../repositories/task-repository.js";

export class TodoController {
  #view;

  constructor(view) {
    this.#view = view;
  }

  init() {
    this.#view.render(TaskRepository.getAll());
    this.#bindEvents();
  }

  #bindEvents() {
    this.#view.onAdd(this.#handleAddTask);
    this.#view.onRemove(this.#handleRemoveTask);
    this.#view.onClearInput(() => this.#view.clearInput());
  }

  #handleAddTask = () => {
    const value = this.#view.getInputValue();

    if (!value) {
      return;
    }

    const task = new Task(value);

    TaskRepository.add(task);
    this.#view.add(task);

    this.#view.clearInput();
  };

  #handleRemoveTask = id => {
    TaskRepository.removeById(id);
    this.#view.removeById(id);
  };

  // #handleClearTasks = () => {
  //   TaskRepository.clear();
  //   this.#view.clear();
  // };
}
