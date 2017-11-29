import TodoComponent from './todo.component.js';

export default angular
  .module('app.components.todo', [])
  .component('todo', TodoComponent)
  .name;
