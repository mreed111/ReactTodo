import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text.'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate text for add todo', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '987123abcdefg',
        text: 'Something to do.',
        completed: false,
        createdAt: 999999
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      // success case
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = {
      type: 'ADD_TODOS',
      todos: [{
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
        }]
    };
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate a toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate a toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 999
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });


});
