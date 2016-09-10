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
          text: 'wash the dog'
        }, {
          id: uuid(),
          text: 'Feed the dog'
        }, {
          id: uuid(),
          text: 'walk the cat'
        }, {
          id: uuid(),
          text: 'de-flea the cat'
        }, {
          id: uuid(),
          text: 'Eat the cat'
        }]
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text
        }
      ]
    });
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
