import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2Hh_MTM-oMdxVBBXGaEU8MnbaPn4JAuc",
    authDomain: "info340b-wi19-demo.firebaseapp.com",
    databaseURL: "https://info340b-wi19-demo.firebaseio.com",
    projectId: "info340b-wi19-demo",
    storageBucket: "info340b-wi19-demo.appspot.com",
    messagingSenderId: "757736727613"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));