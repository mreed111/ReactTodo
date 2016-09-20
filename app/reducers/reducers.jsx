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
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      case 'TOGGLE_TODO':
        var updatedTodos = state.map((todo) => {
          if (todo.id === action.id) {
            var nextCompleted = !todo.completed;
            return {
              ...todo,
              completed: nextCompleted,
              completedAt: (nextCompleted) ? moment().unix() : undefined
            };
          }
        });
        return updatedTodos;
      default:
        return state;
  }
};
