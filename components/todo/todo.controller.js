import { log } from "util";

class Todo {
  constructor() {
    this.tasks = [];
    this.newTask = '';
  }
  addTask() {
    this.tasks.push({'title': this.newTask});
    this.newTask = '';
  }
  remove(index) {
    this.tasks.splice(index, 1);
  }
}
Todo.$$ngIsClass = true;

 export default Todo;
