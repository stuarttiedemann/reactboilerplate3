import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAANTRR6ONmqOqPioFZyrBzb-E1Oad6TZU",
    authDomain: "stuart-todo-app.firebaseapp.com",
    databaseURL: "https://stuart-todo-app.firebaseio.com",
    storageBucket: "stuart-todo-app.appspot.com",
    messagingSenderId: "633567048899"
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
      name: 'Stuart',
      age: 40
    }
  }).then(() => {
    console.log('set worked');
  }, (e) => {
    console.log('set failed');
  });

  firebaseRef.child('user').set({
    name: 'Mike'
  });

  firebaseRef.child('app').set({
    name: 'Todo App'
  });