/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  tasks;
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  remove(n) {
    if (n < this.tasks.length) {
      this.tasks.splice(n, 1);
    }
  }
  update(n, updatedTask) {
    if (n < this.tasks.length) {
      this.tasks[n] = updatedTask;
    }
  }
  clear() {
    this.tasks = [];
  }
  get(n) {
    if (n < this.tasks.length) {
      return this.tasks[n];
    } else return null;
  }
  getAll() {
    return this.tasks;
  }
}
module.exports = Todo;
