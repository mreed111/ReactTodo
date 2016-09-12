var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each Todo item', () => {
    var todos = [{
        id: 1,
        text: 'wash the dog'
      }, {
        id: 2,
        text: 'Feed the dog'
      }, {
        id: 3,
        text: 'walk the cat'
      }];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

      expect(todosComponents.length).toBe(todos.length);
  });

  it('should return "Nothing To Do" if todoList is empty', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
