var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};

// We want to get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);