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
        text: 'my new todo item.'
      };
      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
      expect(res[0].completedAt).toBe(undefined);
    });

    it('should toggle a todo and set the completedAt value.', () => {
      var testTodos = [{
          id: '999',
          text: 'Something to do.',
          completed: false,
          createdAt: 1000,
          completedAt: undefined
        },{
          id: '111',
          text: 'Something else to do.',
          completed: true,
          createdAt: 1000,
          completedAt: 2000
        }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '111'
      };
      var res = reducers.todosReducer(df(testTodos),df(action));

      expect(res.length).toEqual(2);
      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(undefined, 'completedAt field should be undefined when completed is toggled to false.');

      action = {
        type: 'TOGGLE_TODO',
        id: '999'
      };
      res = reducers.todosReducer(df(testTodos),df(action));

      expect(res.length).toEqual(2);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined, 'completedAt field should be set when completed is toggled to true.');
    });
  });
});
