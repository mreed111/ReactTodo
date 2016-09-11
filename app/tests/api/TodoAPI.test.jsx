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
      localStorage.setItem('todos', JSON.stringify(validTodos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(validTodos);

    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'first item',
      completed: true
    },{
      id: 2,
      text: 'second item',
      completed: false
    },{
      id: 3,
      text: 'third item',
      completed: true
    },{
      id: 4,
      text: 'forth item',
      completed: false
    }];

    it('should display all todo items when Show Completed todos is checked', () => {
      //
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(4);
    });

    it('should display only todo items that are not completed when Show Completed todos is not checked', () => {
      //
      var filterTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(2);
    });

    it('should sort the completed items to the bottom of the list', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos[0].completed).toBe(false);
      expect(filterTodos[1].completed).toBe(false);
      expect(filterTodos[2].completed).toBe(true);
      expect(filterTodos[3].completed).toBe(true);
    });

    it('should apply search string to displayed todos list', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, 'd i');

      expect(filterTodos.length).toBe(2);

      var filterTodos = TodoAPI.filterTodos([...todos, {id: 5, text: 'DDD Item', completed: true}], true, 'd i');

      expect(filterTodos.length).toBe(3);
    });

    it('should return all todos if searchText is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(4);
    });

  });

});
