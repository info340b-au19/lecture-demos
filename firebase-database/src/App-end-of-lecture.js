import React, { Component } from 'react';

import TaskApp from './Tasks';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {user: null}
  }

  //Configure FirebaseUI (inside the component, public class field)
  uiConfig = {
    //which sign in values should we support?
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    //for external sign-in methods, use popup instead of redirect
    signInFlow: 'popup',
  };

  componentDidMount() {
    //when I signed in or signed out
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) { //if exists, then we logged in
        console.log("Logged in as", firebaseUser.email);
        this.setState({user: firebaseUser})
      } else {
        console.log("Logged out");
        this.setState({user: null})
      }
    })
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  handleSignOut = () => {
    firebase.auth().signOut()
  }

  render() {
    let content = null;
    if(!this.state.user) { //signed out
      content = (
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      )
    } 
    else { //signed in
      content = (
        <div>
          <div className="alert alert-success">
            <h3>Logged in as {this.state.user.displayName}
              <button className="btn btn-warning float-right" onClick={this.handleSignOut}>
                Sign Out
              </button>
            </h3>
          </div>
          <TaskApp />
        </div>
      )
    }

    return (
      <div className="container">

        {/* Only included if first clause is true */}
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }

        {/* Show content based on user login state */}
        {content}

      </div>
    )
  }
}