export class TodoView {
  #input;
  #btn;
  #list;
  #empty;

  constructor(ui) {
    this.#input = ui.todoInput;
    this.#btn = ui.todoBtn;
    this.#list = ui.taskList;
    this.#empty = ui.empty;
  }

  onAdd(handler) {
    this.#btn.addEventListener("click", handler);

    this.#input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        handler();
      }
    });
  }

  onRemove(handler) {
    this.#list.addEventListener("click", e => {
      const li = e.target.closest(".task");

      if (!li) {
        return;
      }
      handler(li.dataset.id);
    });
  }

  // onClear(handler) {

  // }

  onClearInput(handler) {
    this.#input.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        handler();
      }
    });
  }

  getInputValue() {
    return this.#input.value.trim();
  }

  clearInput() {
    this.#input.value = "";
  }

  render(tasks) {
    this.#list.innerHTML = "";
    tasks.forEach(task => this.add(task));
    this.#updateEmpty();
  }

  add(task) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.name;
    li.dataset.id = task.id;

    this.#list.append(li);
    this.#updateEmpty();
  }

  removeById(id) {
    const el = this.#list.querySelector(`[data-id="${id}"]`);

    if (el) {
      el.remove();
    }

    this.#updateEmpty();
  }

  // clear() {
  //   this.#list.innerHTML = "";
  // }

  #updateEmpty() {
    const isEmpty = this.#list.children.length === 0;

    this.#list.classList.toggle("hidden", isEmpty);
    this.#empty.classList.toggle("hidden", !isEmpty);
  }
}
