'use strict';

//slide 10 with a different example from the slide

let head1 = jQuery('h1');
// let head1 = $('h1');
console.log(head1);   //see it's an object

// head1.text('Hello world!');  //setter
// console.log(head1.text());  

// $('h1').text('changed to hello galaxy!')  //setter
// console.log(head1.text());

//slide 11

let ball = $('circle')

// slide 12 ball
//example 1 syntax
ball.attr('cx', 225)     //set individually
ball.attr('cy', 95)


// method chaining, works because each method returns a reference to the changed element

// //example 2 syntax
// ball.attr('cx', 225).attr('cy', 95);   //chained

// // example 3 syntax
// ball.attr({ cx: 225, cy:95 }) // or i can pass in an object with the key value pair



// // slide 13 buttons 
 
// let buttons = $('button');

// // let buttons = $('button, p');


// buttons.addClass('btn-success')


//slide 14 - adding new element

// //DOM

// // part1, remind how to create a new element in DOM
// let newP = document.createElement('p')   //example using the DOM create element
// newP.textContent = "I'm new!"


// // part 2, show how to create in jquery
// let newP = $("<p>I'm <em>new</em>!</p>")    //example using jquery
// console.log(newP)

// // part 3, we stilln need to add to the DOM
// $('#text .card-body').append(newP)
// // $('#text .card-body').prepend(newP)  // move it to the start
// $('#text .card-body').prepend("<p>I'm first!</p>")



////Slide 15 - Event Listeners - mouseenter and mouseleave (hover)

// $('img').click(function() {
//     console.log('you clicked me');
// })


// $('img')
//     .mouseenter(function(event) {
//         $(event.target).attr('src', 'img/surprised.png')
//     })
//     .mouseleave(function(event) {
//         $(event.target).attr('src', 'img/happy.png')
//     })

//     // psuedo code to show click instead... and using a global state variable
//     //  .click(function(){
//     //      if(state.isHappy) {
//     //          $(event.target).attr('src', 'img/surprised.png')
//     //          state.isHappy = false
//     //      }
//     //  })


// // SLIDE 16 - Event listener - slide - it removes the item, but slowly... the display goes to none. it's still in the dom tree
//     head1.click(function(event) {
//     $(event.target).slideUp(1000)
// })


// SLIDE 17 JQuery Animation Effects

// const state = {
//     playground: {
//         ballAtTop: true,
//     }
// }

// ball.click(function(event){
//     let ball = $(event.target)
//     if(state.playground.ballAtTop){
//         ball.animate( {cx:415, cy:320}, 1000, function(){
//             //what to do when done
//             ball.attr({cx:415, cy:320}) //actually move (not just appearance)
//             state.playground.ballAtTop = false
//         } )
//     } else {
//         ball.attr({ cx: 225, cy:95 });
//         ball.css({ cx: 225, cy:95 });
//         state.playground.ballAtTop = true
//     }
// })




