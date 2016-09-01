var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'wash the dog'
        },
        {
          id: 2,
          text: 'Feed the dog'
        },
        {
          id: 3,
          text: 'walk the cat'
        },
        {
          id: 4,
          text: 'de-flea the cat'
        },
        {
          id: 5,
          text: 'Eat the cat'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
