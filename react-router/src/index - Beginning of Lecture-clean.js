import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; //include our css (bundled)
import App from './App';

const BLOG_POSTS = { //model for demoing
  '2019-02-12':"So much snow........",
  '2019-02-11':"Ugh, more snow...",
  '2019-02-05':"More snow! Yay!",
  '2019-02-04':"It snowed today!! Awesome!",
};

//render App, passing it array as prop!
ReactDOM.render(<App initialPosts={BLOG_POSTS} />, document.getElementById('root'));