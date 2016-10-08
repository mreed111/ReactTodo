var uuid = require('node-uuid');
var moment = require('moment');


// searchText reducer
//------------------------------------------------------------
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

// showCompleted reducer
//------------------------------------------------------------
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

// todos reducer
//------------------------------------------------------------
export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      case 'UPDATE_TODO':
        var updatedTodos = state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...action.updates
            }
          } else {
            return todo;
          }
        });
        return updatedTodos;
      case  'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
      case 'LOGOUT':
        return [];
      default:
        return state;
  }
};

// auth reducer
//------------------------------------------------------------
export var authReducer = (state = {}, action) => {
  switch (action.type) {
    // case 'LOGIN':
    //   return {
    //       auth: {
    //         uid: action.uid
    //       }
    //     };
    // case 'LOGOUT':
    //   return {
    //       auth: {}
    //     };
    case 'LOGIN':
      return {
          uid: action.uid
        };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
