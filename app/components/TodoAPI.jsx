var $ = require('jquery');

module.exports = {
  // setTodos: function (todos) {
  //   // verify that the input is an array
  //   if ($.isArray(todos)) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     return todos;
  //   }
  // },
  // getTodos: function () {
  //   var stringTodos = localStorage.getItem('todos');
  //   //
  //   var todos = [];
  //
  //   try {
  //     todos = JSON.parse(stringTodos);
  //   } catch (e) {
  //     // if error, do nothing.  control will fall through and
  //     // empty array will be returned.
  //   }
  // 
  //   return $.isArray(todos) ? todos : [];
  // },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return (todo.text.toLowerCase().indexOf(searchText) > -1) || false;
      });
    }

    // sort todos with non-completed first
    filteredTodos.sort((a,b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
