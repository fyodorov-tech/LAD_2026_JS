import { createLayout } from "./ui/app-layout.js";
import { TodoView } from "./ui/todo-view.js";
import { TodoController } from "./controller.js/todo-controller.js";

const ui = createLayout();
const todoView = new TodoView(ui);
const controller = new TodoController(todoView);
controller.init();
