var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [{
          id: uuid(),
          text: 'wash the dog',
          completed: true
        }, {
          id: uuid(),
          text: 'Feed the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'walk the cat',
          completed: false
        }, {
          id: uuid(),
          text: 'de-flea the cat',
          completed: false
        }, {
          id: uuid(),
          text: 'Eat the cat',
          completed: true
        }]
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
    console.log('searchText = ' + searchText);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo  onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
