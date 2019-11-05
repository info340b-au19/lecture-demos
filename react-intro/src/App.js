 import React, { Component } from 'react';



// //Example 5
// export class HelloMessage extends Component {
//   render() {
//       let message = "Hello World!";
//       return <h1>{message}</h1>;
//   }
// }



// // Example 6

// class HelloMessage extends Component {
//   render() {
//       let message = "Hello World!";
//       return <h1>{message}</h1>;
//   }
// }
// export default class App extends Component {
//     render() {
//       return (
//         <div>
//           <header className="jumbotron">
//             <HelloMessage />
//           </header>
//           <main>
//             <p>
//               Hi
//             </p>
//           </main>
//         </div>
//       );
//     }
// }




// // Example 7 - add buttons and blue style to the background color


// class HelloMessage extends Component {
//   render() {
//       let message = "Hello World!";
//       return <h1>{message}</h1>;
//   }
// }

// class Button extends Component {
//   render() {
//     return (
//       <button className="btn btn-primary rounded-circle">Hi</button>
//     )
//   }
// }
// export default class App extends Component {
//     render() {
//       return (
//         <div>
//           <header className="jumbotron">
//             <HelloMessage />
//           </header>
//           <main>
//             <p>
//               <Button />
//               <Button />
//               <Button />
//             </p>
//           </main>
//         </div>
//       );
//     }
// }




// // Example 8 - pass in attributes through the props


// class HelloMessage extends Component {
//   render() {
//       let message = "Hello World!";
//       return <h1>{message}</h1>;
//   }
// }

// class Button extends Component {
//   render() {
//     let buttontext = this.props.text;
//     return (
//       <button className="btn btn-primary rounded-circle">{buttontext}</button>
//     )
//   }
// }
// export default class App extends Component {
//     render() {
//       return (
//         <div>
//           <header className="jumbotron">
//             <HelloMessage />
//           </header>
//           <main>
//             <p>
//               <Button text="1"/>     {/* passing in props for the buttons */}
//               <Button text="2"/>
//               <Button text="3"/>
//             </p>
//           </main>
//         </div>
//       );
//     }
// }




// // Example 9
// import CardList from './Cards';

//  class HelloMessage extends React.Component {
//      makeMessageElement(string) {
//         return <h1 id="hello" className="myclass">{string}</h1>
//     }
//      render() {
//         let message = "Hello world message";
//         let h1 = this.makeMessageElement(message);
//          //return the DOM to show
//         return (
//             <div className="jumbotron">
//                 {h1}
//             </div>
//         );
//     }
// }
//  export default class App extends Component {
//     render() {
//         let messageArray = ["Hi", "hello", "taking too long", "add", "more", "stuff", "lorem ipsum"];
//          return (
//             <div>
//                 <HelloMessage />
//                 <div className="container">
//                     <CardList messages={messageArray} />
//                 </div>
//             </div>
//         );
//     }
// } 

