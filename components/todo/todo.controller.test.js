import Todo from './todo.controller';

describe('TodoComponent', () => {
  it('shoud add new tasks', () => {
    const todoCtrl = new Todo();

    expect(todoCtrl.tasks.length).toBe(0);
    expect(todoCtrl.newTask).toBe('');

    todoCtrl.newTask = 'hej';
    todoCtrl.addTask();

    expect(todoCtrl.tasks.length).toBe(1);

    todoCtrl.remove();

    expect(todoCtrl.tasks.length).toBe(0);
  });
});
