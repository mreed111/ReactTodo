var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var moment = require('moment');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the dodos state on handleAddTodo', () => {
    var todoText = 'New Todo Text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    // initialize the todos array
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);

    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'Test the todo list',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // initialize the todos array
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should set completedAt value to undefined when todo is toggled from completed to not completed', () => {
    var todoData = {
      id: 11,
      text: 'Test the todo list',
      completed: true,
      createdAt: 0,
      completedAt: moment().unix()
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // initialize the todos array
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });

});
