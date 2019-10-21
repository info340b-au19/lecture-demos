
'use strict';


//SLIDE 9 - Anonomous Variables

//part 1 -------------------------

// let array = [1,2,3]
// console.log(array)

// console.log([4,5,6]);

// console.log(sayHello);


//part 3 --------------------------
//hoisting example
// sayHello("class");
// sayGreeting("class");


// part 2 ------------------------
// function sayHello(person){
//     console.log("Hello, "+ person);
// }
// let sayGreeting = function(person){
//     console.log("Hi there,",+ person);
// }

// sayHello("class");
// sayGreeting("class");

// console.log(function() {  // same anonymous function as above
//     console.log("Hello");
// })




//SLIDE 10 First assign array to variable, then do same with function
// PART1 <!-- assign array to variable -->

// let myArray = ['a','b','c'];

// typeof myArray //=> 'object'
// console.log(typeof myArray);

// let other = myArray;

// console.log( other[1] ); // <!-- access value in other -->

//PART 2
// function sayHello(name) { 
//     console.log("Hello, "+name);
//  }
 
//  //takes ANOTHER FUNCTION as an arg
//  //will call the arg function, 
//  //passing it "world"
//  function doWorld(aFunction) {
//     aFunction("world");
//  }
 
 
 
//  //call function and pass value
//  doWorld(sayHello); //prints "Hello world"
 
 
//  //pass literal (anonymous value)
//  doWorld(function(msg) {
//    console.log("you said: "+msg);
//  }); //prints "you said: world"
 



//SLIDE 11 - FUNCTIONS ARE OBJECTS

// function sayHello(name) { 
//     console.log("Hello, "+name);
//  }
 
//  function doWorld(aFunction) {   //takes ANOTHER FUNCTION as an arg will call the arg function passing it "world"
//     aFunction("world");
//  }
 
//  doWorld(sayHello); //call function and pass value - prints "Hello world"
 
//  doWorld(function(msg) {          //pass literal (anonymous value)
//    console.log("you said: "+msg);
//  }); //prints "you said: world"
 


//SLIDE 13 - takes in TWO callback functions!

// function doTogether(firstCallback, secondCallback){
//     firstCallback();  //execute the first function
//     secondCallback();  //execute the second function
//     console.log('at the same time!');
// }

// function rubBelly() {
//     console.log('rub your belly');
// }
// function patHead() {
//     console.log('pat your head');
// }


// doTogether(rubBelly, patHead); //pass in the callbacks to do them together

// // let patHead = function() {
// //     console.log('pat your head');
// // }


let myArray1 = [1,2,3,4,5];


// SLIDE 14 - ARRAY ITERATION

// let sum = 0;
// myArray1.forEach(function(n){
//     sum = sum + n;
// });
// console.log(sum);


//SLIDE 15/16 - MAPPING

// myArray1.forEach(function(n, idx){  //traditional looping method
//     myArray1[idx] = n*n;
// });
// console.log(myArray1);


// myArray1 = myArray1.map(function(n) {   //using map with callback
//     return n*n;
// })
// console.log(myArray1);


// SLIDE 16 - FILTERING


// let isACrowd = myArray1.filter(function(n) { 
//     return n >= 3; //keep if > 3
//  }); 

//  console.log(isACrowd);

//SLIDE 17 -- REDUCING

// let myReduction = myArray1.reduce(function(total, next){
//     return total+next;
// }, 5)
// console.log(myReduction);


//BOOK EXAMPLE OF USING FUNCTION AS PROPERTY (method)


// let fido = {        // An object representing a Dog
//     name: "Fido",
//     bark: function() { console.log(this.name, "woofs")}
//   }
  
  
//   let spot = {              // An object representing another Dog
//     name: "Spot",
//     bark: function() { console.log(this.name, "yips")}
//   }
  
//   console.log('***This is Fido barking:***');
//   fido.bark();      //=> "Fido woofs". Note, `this` will refer to the `fido` object. 
  
//   console.log('***This is Spot barking***');
//   spot.bark();  //=> "Spot yips". Note, `this` will refer to the `spot` object. 
