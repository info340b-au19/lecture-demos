'use strict';

// // Slide 8 - (example 1)
// let theH1 = document.querySelector('h1');
// console.log(theH1)

// //change content
// let subtitle = document.querySelector('header p');
// subtitle.innerHTML = subtitle.textContent + " <em>Prof Carlson</em>";


//  //change attributes - SLIDE 9 (example 2)
//  let img = document.querySelector('img');
//  img.src = 'img/husky.jpg';

// // //change style - SLIDE 10 (example 3)
// theH1.classList.add('text-success');
// img.classList.add('anim');

// // in console add this : img.classList.toggle('scale-out')



// //create an element -- SLIDE 11 (example 4)
// let newLi = document.createElement('li')
// newLi.innerHTML = '<a href="https://ischool.uw.edu/">Another iSchool Link</a>'
// let linkList = document.querySelector('ul')
// linkList.appendChild(newLi)



// //USE Function to add item(s) - SLIDE 12 (example 5)
// function renderCookie() {
//     let jar = document.querySelector('#cookie-jar');
//     let cookie = document.createElement('img')
//     cookie.src = "img/cookie.png"
//     cookie.alt = "a cookie"
//     jar.appendChild(cookie);
// }

// renderCookie();


// // USE Function to add n number by iterating - SLIDE 12 (example 5 continued)
// function renderCookieJar(number) {
//     let jar = document.querySelector('#cookie-jar')
//     jar.innerHTML = '';             // deleting any cookies that used to be there
//     for(let i=0; i<number; i++){
//         renderCookie()
//     }
// }

// //actually do that
// renderCookieJar(10);


//  renderCookieJar(5);

// // Add Event Listener - SLIDE 14 (example 6)

// let button1 = document.querySelector('#button1');  
// button1.addEventListener('click', function() {      //register this callback inline function
// console.log("button clicked")

// });

// // Keep state as events occur - SLIDE 15 (example 7)

// let isPuppy = false;     //global variable

// img.addEventListener('click', function() {
//     if(isPuppy){
//         img.src = 'img/husky.jpg';
//         isPuppy = false
//     } else {
//         img.src = 'img/puppy.jpg';
//         isPuppy = true
//     }
// })


// // Temporary local data store
// let DATA = {
//     username: "tim",
//     cookietype: "choclate chip",

// }

