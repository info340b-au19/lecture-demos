import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; //include our css (bundled)
import App from './App';

// // added to get routing working SLIDE 12
// import {BrowserRouter} from 'react-router-dom';

// // added to get the fetch to work (slide 4)
// import 'whatwg-fetch';

const BLOG_POSTS = { //model for demoing
  '2019-02-12':"So much snow........",
  '2019-02-11':"Ugh, more snow...",
  '2019-02-05':"More snow! Yay!",
  '2019-02-04':"It snowed today!! Awesome!",
};

//render App, passing it array as prop!
ReactDOM.render(<App initialPosts={BLOG_POSTS} />, document.getElementById('root'));

// // added to get routing working SLIDE 12
// ReactDOM.render(
//   <BrowserRouter>
//     <App initialPosts={BLOG_POSTS} />
//   </BrowserRouter>, 
// document.getElementById('root'));