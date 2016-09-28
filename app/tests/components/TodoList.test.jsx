var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
//var Todo = require('Todo');
import ConnectedTodo, {Todo}  from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each Todo item', () => {
    var todos = [{
        id: 1,
        text: 'wash the dog',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }, {
        id: 2,
        text: 'Feed the dog',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }, {
        id: 3,
        text: 'walk the cat',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }];
      var store = configure({
        todos
      });
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
      );

      var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

      expect(todosComponents.length).toBe(todos.length);
  });

  it('should return "Nothing To Do" if todoList is empty', () => {
    var todos = [];
    console.log('todoList --- ' + todos.length);

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toEqual(0);
    // var noTodosComponents = TestUtils.scryRenderedComponentsWithType(provider, 'container__message');
    // expect(noTodosComponents.length).toEqual(1);
    // var $el = $(provider.findDOMNode(todoList));
    // expect($el.find('.container__message').length).toBe(1);

    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    // var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    // var $el = $(ReactDOM.findDOMNode(todoList));
    //
    // expect($el.find('.container__message').length).toBe(1);
  });

});
