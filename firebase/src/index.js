import React from 'react';
import ReactDOM from 'react-dom';
// //added 1
// import firebase from 'firebase/app';     //add firebase - give us access to the global firebase variable

// //added 2
// import 'firebase/auth';     //gives us access to the auth stuff so it will turn on the firebase auth features

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// //added 1
// //copied from the firebase site... we don't need the script tags because we loaded firebase via npm locally
// var config = {
//     apiKey: "AIzaSyD2Hh_MTM-oMdxVBBXGaEU8MnbaPn4JAuc",
//     authDomain: "info340b-wi19-demo.firebaseapp.com",
//     databaseURL: "https://info340b-wi19-demo.firebaseio.com",
//     projectId: "info340b-wi19-demo",
//     storageBucket: "info340b-wi19-demo.appspot.com",
//     messagingSenderId: "757736727613"
//   };
//   firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));