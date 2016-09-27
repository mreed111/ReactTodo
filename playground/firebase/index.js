import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMQFqhn11lPH1gMRopU626oN_MmKLxiQM",
  authDomain: "mreed-todo-app.firebaseapp.com",
  databaseURL: "https://mreed-todo-app.firebaseio.com",
  storageBucket: "mreed-todo-app.appspot.com",
  messagingSenderId: "394602223807"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Mike',
    age: 59
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('todo_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('todo_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('todo_removed', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Fish all day'
});
console.log('todo id:', newTodoRef.key);

newTodoRef = todosRef.push({
  text: 'sleep'
});
console.log('todo id:', newTodoRef.key);
