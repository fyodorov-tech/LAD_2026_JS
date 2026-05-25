import { Task } from "../models/task.js";

export class TaskRepository {
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
