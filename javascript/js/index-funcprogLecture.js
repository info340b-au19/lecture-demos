console.log("hello world");
console.log("hello back to you");
'use strict';

// let array = [1,2,3]
// console.log(array)

// function sayHello(){
//     console.log("Hello");
// }

// console.log(sayHello)
// <!-- assign array to variable -->
let myArray = ['a','b','c'];

typeof myArray //=> 'object'
console.log(typeof myArray);
let other = myArray;

// <!-- access value in other -->
console.log( other[1] ); 

//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

// function patHead() {
//     console.log('pat your head');
// }

function rubBelly() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(rubBelly, patHead);

// let patHead = function() {
//     console.log('pat your head');
// }

function sayHello(name) { 
    console.log("Hello, "+name);
 }
 
 //takes ANOTHER FUNCTION as an arg
 //will call the arg function, 
 //passing it "world"
 function doWorld(aFunction) {
    aFunction("world");
 }
 
 
 
 //call function and pass value
 doWorld(sayHello); //prints "Hello world"
 
 
 //pass literal (anonymous value)
 doWorld(function(msg) {
   console.log("you said: "+msg);
 }); //prints "you said: world"
 

function patHead() {
    console.log('pat your head');
}

let myArray1 = [1,2,3,4,5];

for(item of myArray1){
    console.log(item);
}

let sum = 0;
myArray1.forEach(function(n){
    sum = sum + n;
});
console.log(sum);


myArray1.forEach(function(n, idx){
    myArray1[idx] = n*n;
});
console.log(myArray1);

myArray1 = myArray1.map(function(n) {
    return n*n;
})
console.log(myArray1);

let add = function(total, next){
    return total+next;
}

let myReduction = myArray1.reduce(function(total, next){
    return total+next;
}, 5)
console.log(myReduction);

