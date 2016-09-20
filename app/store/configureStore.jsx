var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure  = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    //redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
