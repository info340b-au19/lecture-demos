import React from 'react';
import ReactDOM from 'react-dom';
// //added 1
// import firebase from 'firebase/app';     //add firebase - give us access to the global firebase variable


// //added 2
// import 'firebase/auth';     //gives us access to the auth stuff so it will turn on the firebase auth features

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// // //added 1
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBw_xGkU3UPbD3r4XjXpm-QUgbiS8vvfnc",
//     authDomain: "timcas-test.firebaseapp.com",
//     databaseURL: "https://timcas-test.firebaseio.com",
//     projectId: "timcas-test",
//     storageBucket: "timcas-test.appspot.com",
//     messagingSenderId: "640049955043",
//     appId: "1:640049955043:web:8a550ffa81e92113b345d6",
//     measurementId: "G-YKFSK3XY7Z"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();


ReactDOM.render(<App />, document.getElementById('root'));