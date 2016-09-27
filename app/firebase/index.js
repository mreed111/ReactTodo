import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMQFqhn11lPH1gMRopU626oN_MmKLxiQM",
    authDomain: "mreed-todo-app.firebaseapp.com",
    databaseURL: "https://mreed-todo-app.firebaseio.com",
    storageBucket: "mreed-todo-app.appspot.com",
    messagingSenderId: "394602223807"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
