var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
        <TodoList todos={todos} />
        <AddTodo  onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
