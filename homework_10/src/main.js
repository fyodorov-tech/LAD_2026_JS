import { createLayout } from "./ui/app-layout.js";
import { TaskController } from "./controller.js/task-controller.js";

const ui = createLayout();

const controller = new TaskController(ui);
controller.init();
