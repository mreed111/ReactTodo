var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    // verify that the input is an array
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    //
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // if error, do nothing.  control will fall through and
      // empty array will be returned.
    }

    return $.isArray(todos) ? todos : [];
  }
};
