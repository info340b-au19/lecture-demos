import React from 'react';
import ReactDOM from 'react-dom';


// Example 1
//message to show

let message = React.createElement(
    'h1',                    //html tag
    {                        //object of attributes
       id        : 'hello',
       className : 'myClass' 
    },
    'Hello World!'           //content
 ); 
 
 //show the content in the web page (inside #root)
 ReactDOM.render(message, document.getElementById('root'));

// // Example 1a

// let message = <h1>Hello <em>World</em></h1>;

// ReactDOM.render(message, document.getElementById('root'));



// // Example 2


// // here we make it a little more complicated by adding a class and embedding
// // the h1 inside a header element
// let header = <header className="jumbotron"><h1>Hello JSX</h1></header>
// ReactDOM.render(header, document.getElementById('root'));




// // Example 3
// // how we can do include inline expressions using the {}
// let title = "Hello JSX as a String";

// let header = (
//             <header className="jumbotron">
//             <h1>{title}</h1>
//             <p>{1+1}</p>
//             <p>"hello world".toUpperCase()</p>
//             <p>{"hello world".toUpperCase()}</p>
//             </header>
// );
// ReactDOM.render(header, document.getElementById('root'));




// // Example 4

// class HelloMessage extends React.Component {
//     render() {
//         let message = "Hello World!";
//         return <h1>{message}</h1>;
//     }
// }

// let instance = <HelloMessage />;
// ReactDOM.render(instance, document.getElementById('root'));

// // Example 4a

// class HelloMessage extends React.Component {
//     render() { 
//         return (
//         <div className="bg-dark">
//             <h1>Hello World</h1>
//         </div>
//         )
//     }
// }

// let instance = <HelloMessage />;
// ReactDOM.render(instance, document.getElementById('root'));



// // Example 5

// import { HelloMessage } from './App'

// ReactDOM.render(<HelloMessage />, document.getElementById('root'));




// // Example 6

// import App from './App'
// ReactDOM.render(<App />, document.getElementById('root'));



// // Example 7 and 8
// import App from './App'
// import './style.css'
// ReactDOM.render(<App />, document.getElementById('root'));




// //Example 9

// import App from './App'
//  ReactDOM.render(<App />, document.getElementById('root'));
