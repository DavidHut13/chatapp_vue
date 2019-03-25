import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyASsqvmbZOTDen1EQQWmhJrWzIGKjMGI7A",
    authDomain: "chatapp-e43a3.firebaseapp.com",
    databaseURL: "https://chatapp-e43a3.firebaseio.com",
    projectId: "chatapp-e43a3",
    storageBucket: "chatapp-e43a3.appspot.com",
    messagingSenderId: "1001683400939"
  };



const firebaseApp = firebase.initializeApp(config);


export default firebaseApp.firestore()