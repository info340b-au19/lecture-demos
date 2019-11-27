import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAWnxCDCbWfws16cfhb0hVs-9TmULqxS9k",
  authDomain: "signupform-67d3b.firebaseapp.com",
  databaseURL: "https://signupform-67d3b.firebaseio.com",
  projectId: "signupform-67d3b",
  storageBucket: "signupform-67d3b.appspot.com",
  messagingSenderId: "747468163961",
  appId: "1:747468163961:web:20ea7896b5160a879d7da8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));