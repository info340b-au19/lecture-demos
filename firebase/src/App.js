import React, { Component } from 'react';

// //added 2
// import firebase from 'firebase/app';

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

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
        };

    }

    // Authentication - register state changes STEP 4

    // componentDidMount() {     //since it's an asynchronous process we do it in component did mount

    //     //when I signed in or signed out - add this listener 
    //     firebase.auth().onAuthStateChanged((firebaseUser) => {
    //         if (firebaseUser) {                 //if exists, then we logged in
    //             console.log("Logged in as", firebaseUser.email);
    //             this.setState({ user: firebaseUser })
    //         } else {
    //             console.log("Logged out");
    //             this.setState({ user: null })
    //         }
    //     })

    // }

        //A callback function for registering new users
        handleSignUp = () => {
            this.setState({ errorMessage: null }); //clear old error

            // //code to sign up users SLIDE 23 -- STEP 3

            // console.log("Creating user", this.state.email);

            // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            //     .then((userCredential) => {
            //         let user = userCredential.user;
            //         console.log(user);

            //         let updatePromise = user.updateProfile({ displayName: this.state.username })
            //         return updatePromise;
            //     })
            //     .then(() => {   //this updates the state so that it immediately updates the banner
            //         this.setState((prevState) => {
            //             let updatedUser = { ...prevState.user, displayName: this.state.username }
            //             return { user: updatedUser }; //updating the state
            //         });
            //     })
            //     .catch((err) => {
            //         this.setState({ errorMessage: err.message });
            //     })

        }

        //A callback function for logging in existing users
        handleSignIn = () => {
            this.setState({ errorMessage: null }); //clear old error

            // //code to sign in users STEP 5 SLIDE 27
            // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            //     .then((userCredential)=> {
            //         let firebaseUser = userCredential.user;
            //         console.log(firebaseUser);
            //         this.setState({user:firebaseUser});
            //     })
            //     .catch((err) => {
            //         this.setState({ errorMessage: err.message });
            //     })
        }

        //A callback function for logging out the current user
        handleSignOut = () => {
            this.setState({ errorMessage: null }); //clear old error

            // // code to sign out users STEP 5 SLIDE 27
            // firebase.auth().signOut();
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