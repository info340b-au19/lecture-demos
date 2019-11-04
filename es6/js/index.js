'use strict';

//pre-written messages
let MESSAGES = ['Hello world!', "Goodbye y'all", "silence", "...", "Bueller?"];


// //Example 1

// class Card {
//     constructor(message){
//         this.message = message;
//     }

//     render() {                                  //render a DOM representation of the card
//         let cardDiv = $('<div class="card">')
//           cardDiv.text(this.message)
//         return cardDiv;
//     }
// }

// // "main work Example 1

// let card = new Card("Hello world");
// let renderedCard = card.render();
// $('#content').append(renderedCard);


// // Example 1a 
// $('#content').append(new Card("Snow Day").render());


// //main work Example 2

// class Card {
//     constructor(message){
//         this.message = message
//     }

//     render() {                                  //render a DOM representation of the card
//         let cardDiv = $('<div class="card">')
//         cardDiv.text(this.message)
//         return cardDiv
//     }
// }

// let cards = MESSAGES.map(function(msg) {            // create an new array by mapping messages to cards
//     return new Card(msg);
// })

// cards.forEach(function(card){                       // now render each of the cards in the array
//      $('#content').append(card.render())

// })



// // Example 3

// class Card {
//     constructor(message, initial){              // we've added a new parameter 'initial' to argument list 
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = $('<div class="card">')
//      //   let body = cardDiv.append('<div class="card-body>"')
//      //   body.text(this.message)
//           cardDiv.text(this.message + " " + this.clickedCount)
//         return cardDiv
//     }
// }

// //main work Example 3
// let cards = MESSAGES.map(function(msg, idx) {       //the map function has as it's second argument the index
//     return new Card(msg, idx)
// })

// cards.forEach(function(card){
//  //   $('#content').append(renderedCard)
//     $('#content').append(card.render())

// })



// // Example 4

// class Card {
//     constructor(message, initial){
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = $('<div class="card">')
//         cardDiv.text(this.message + " " + this.clickedCount)
//         // here the "this" variable is defined as the card
//         // console.log("out of callback", this)


//         cardDiv.click(function(){
//             this.clickCount++;
//             // In here the "this" object is defined as the window (browser) and the windows object doesn't have a .message() method
//             console.log("You clicked on "+this.message)
//         })
//         return cardDiv
//     }
// }

// //main work Example 4
// let cards = MESSAGES.map(function(msg, idx) {
//     return new Card(msg, idx)
// })

// cards.forEach(function(card){
//      $('#content').append(card.render())
// })

// // see function is called on some object even if it's undefined
// function foo() {console.log("I was called on", this);}
// foo();

// // Example 4a

// class Card {
//     constructor(message, initial){
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = $('<div class="card">')
//         cardDiv.text(this.message + " " + this.clickedCount)

//         // click callback function was in normal anonymous syntax
// //         cardDiv.click(function(){
// //         this.clickCount++;
// //         console.log("You clicked on "+this.message)
// //         })       

//     // anonomous function changed to arrow function syntax
//         cardDiv.click(() => {
//         console.log("You clicked on "+this.message)
//         })

//         return cardDiv
//     }

// }

// //main work Example 4a

// // messages map call back was in normal anonymous syntax
// let cards = MESSAGES.map(function(msg, idx) {
//     return new Card(msg, idx)
// })

// // // anonomous function changed to arrow function syntax
// // let cards = MESSAGES.map((msg, idx) =>  new Card(msg, idx))


// // cards forEach call back was in normal anonymous syntax
// cards.forEach(function(card){
//      $('#content').append(card.render())
// })

// // anonomous function changed to arrow function syntax
// cards.forEach( (card) => {
//      $('#content').append(card.render())
// })


// // another confusing example
// let foo = () => 'foo and more foo';
// console.log(foo());


// //Example 5

// class Card {
//     constructor(message, initial) {
//         this.message = message
//         this.clickedCount = initial
//         this.cardDiv = $('<div class="card">')
//     }

//     incrementCount() {
//         this.clickedCount++;
//         this.cardDiv.text(this.message + " " + this.clickedCount)
//     }
//     render() {
//         this.cardDiv.text(this.message + " " + this.clickedCount)
//         this.cardDiv.click(() => this.incrementCount())
//         return this.cardDiv
//     }

    
// }

// //"main work"

// let cards = MESSAGES.map((msg, idx) => new Card(msg, idx))

// cards.forEach((card) => {
//     $('#content').append(card.render())
// })