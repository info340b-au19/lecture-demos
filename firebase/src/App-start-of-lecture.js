import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

export class SignUpForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    };

  }

  //A callback function for registering new users
  handleSignUp = () => {
    this.setState({errorMessage:null}); //clear old error

  }

  //A callback function for logging in existing users
  handleSignIn = () => {
    this.setState({errorMessage:null}); //clear old error

  }

  //A callback function for logging out the current user
  handleSignOut = () => {
    this.setState({errorMessage:null}); //clear old error

  }

  handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  render() {
    return (
      <div className="container">
        <h2>Sign up!</h2>

        {/* Only included if first clause is true */}
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }

        {this.state.user && 
          <div className="alert alert-success"><h3>Logged in as {this.state.user.displayName}</h3></div>
        }        

        <div className="form-group">
          <label>Email:</label>
          <input className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control"
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
            />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            />
        </div>

        <div className="form-group mb-5">
          <button className="btn btn-primary mr-2" onClick={this.handleSignUp}>
            Sign Up
          </button>
          <button className="btn btn-success mr-2" onClick={this.handleSignIn}>
            Sign In
          </button>
          <button className="btn btn-warning mr-2" onClick={this.handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}