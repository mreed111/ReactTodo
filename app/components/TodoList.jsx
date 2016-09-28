var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, searchText, showCompleted} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      var containerMessage = 'Nothing To Do';
      if (filteredTodos.length === 0 && searchText.length > 0) {
        containerMessage = 'No Todos with "'+searchText+'" to display';
      }
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">{containerMessage}</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default  connect(
  (state) => {
    return state;
  }
)(TodoList);
