var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');


var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'look for this'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });


  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted state.', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);

      res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abcdefg987',
          text: 'my new todo item.',
          completed: false,
          createdAt: 999999
        }
      };
      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update a todo.', () => {
      var todos = [{
          id: '999',
          text: 'Something to do.',
          completed: true,
          createdAt: 1000,
          completedAt: 99000
        }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(todos.length);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('should set uid value on login', () => {
      var testUID = '123999';
      var action = {
        type: 'LOGIN',
        uid: testUID
      };
      var res = reducers.authReducer(df('LOGIN'), df(action));

      expect(res.uid).toEqual(action.uid);
    });

    it('should remove uid value on logout', () => {
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df('LOGOUT'), df(action));

      expect(res).toExclude({uid: ''});
    });
  });
});
