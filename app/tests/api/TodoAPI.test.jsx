var expect = require('expect');

// since we are not renderng React components
// only the expect library is needed.

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should write the todos to the Data Store when valid data is provided.', () => {
      var todos = [{
        id: 99,
        text: 'test valid data',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not write the todos to the Data Store when invalid data is provided.', () => {
      var validTodos = [{
        id: 99,
        text: 'test valid data',
        completed: false
      }];
      TodoAPI.setTodos(validTodos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(validTodos);

      var invalidTodos = 'bad data';
      TodoAPI.setTodos(invalidTodos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(validTodos);
    });
  });

  describe('getTodos', () => {
    it('sould return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should read in the current todos list from the Data Store.', () => {
      var validTodos = [{
        id: 99,
        text: 'test valid data',
        completed: false
      }];
      TodoAPI.setTodos(validTodos);
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(validTodos);

    });
  });

});
