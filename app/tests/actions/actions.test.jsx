import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';

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

  it('should generate updateToggleTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '999',
      updates: {
        completed: false
      }
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        // success, logged in anonymously
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        // make a new todo
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'Something to do.',
          completed: false,
          completedAt: 99999
        });
      })
      .then(() => done())
      .catch(done);
      //
      // var todosRef = firebaseRef.child('todos');
      // //empty the todos array.
      // todosRef.remove().then(() => {
      //   testTodoRef = firebaseRef.child('todos').push();
      //
      //   return testTodoRef.set({
      //     text: 'Something to do.',
      //     completed: false,
      //     completedAt: 99999
      //   })
      // })
      // .then(() => done())
      // .catch(done);
      //
    });

    afterEach((done) => {
      // remove all todos
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO Actions', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('xxx');

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done());
    });

    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        console.log('mock actions length: ' + mockActions[0].todos.length);
        expect(mockActions[0].todos.length).toEqual(2);

        console.log('mock action[0] type: ' + mockActions[0].type);
        expect(mockActions[0].type).toEqual('ADD_TODOSx');

        console.log('mock action[0] text: ' + mockActions[0].todos[0].text);
        expect(mockActions[0].todos[0].text).toEqual('Something to do. xxx');

        done();
      }, done());
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
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

  });

  describe('tests for Authorization actions', () => {
    it('should generate LOGIN action object', () => {
      const action = {
        type: 'LOGIN',
        uid: '000999'
      };
      var res = actions.login(action.uid);

      expect(res).toEqual(action);
    });

    it('should generate LOGOUT action object', () => {
      const action = {
        type: 'LOGOUT'
      };
      var res = actions.logout(action.uid);

      expect(res).toEqual(action);
    });
  });

});
