var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
          id: 1,
          text: 'wash the dog'
        }, {
          id: 2,
          text: 'Feed the dog'
        }, {
          id: 3,
          text: 'walk the cat'
        }, {
          id: 4,
          text: 'de-flea the cat'
        }, {
          id: 5,
          text: 'Eat the cat'
        }]
    }
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo  onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
