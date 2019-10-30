'use strict';

// SLIDE 11 part A - start by showing the form to grab data  
// let form = document.querySelector('form');                      // grab the form element
// form.addEventListener('submit', function(event) {               // listen for when the submit event occurs
//     event.preventDefault();                                     // prevent the default behavior from happening ( the form sends the http request)
//     console.log("Form sumbmitted!");

//     // SLIDE 11 part B - grab the query from the form
//     let inputBox = document.querySelector('#queryInput');       // grab the value that is input into the form
//     let query = inputBox.value;
//     console.log("searching for", query);

//     //SLIDE 11 part C - send AJAX request ourselves
//     let url = "https://api.github.com/search/repositories?q="+query
//     console.log("sending request to", url);

    
    
    // // send the request!
   
    // //version 1 -- SLIDE 15 --- -just show a callback on the promise from fetch
    
    // let promise = fetch(url)
    // promise.then(function(response){
    //     console.log(response);
    // })

    // console.log("do more stuff");       //see how the asynch works? this line shows up in the console before the promise is returned

   
   
    // // version 2 ---SLIDE 16 and 17 ---- but wait, fetch doesn't return the data it returns the response
    // // so we need to call the .json() method to actually get a usable data 
    // // but .json() also asyncronous so it returns a promise so we need to 
    // // register another callback function with it

    // let promise = fetch(url)
    // let updatedBuzzer = promise.then(function(response){
    //     let encodePromise = response.json() //extract json content from response
    //     return encodePromise;       
    // })
    
    // // so now we can do the callback for the updated buzzer... here we're no longer in a promise
    // updatedBuzzer.then(function(data){
    //     console.log(data);
    // })

// //version 3 --- SLIDE 18 ---clean up version 2 using chaining them together
// //these 4 lines (console.log doesn't count) is how you get data


// fetch(url)
//     .then(function(response){
//         return response.json();       
// })
//     .then(function(data){
//     console.log(data);
// })

 
 
// // version 4 --SLIDE 19 -- show how to handle errors


//     fetch(url)
//         .then(function(response){
//             return response.json();       
//         })
//         .then(function(data){
//             console.log(data);
//             throw new Error("HAHAHA");
//             renderRepos(data);
//         })
 
//         .catch(function(error){
//             console.log(error.message);
//         })
//         .then(function(){   
//             console.log("final then!")
//         })

//     console.log("do more stuff"); //there is no data yet


    
 })


function renderRepos(data){
    $("#content").append("<ul>...")

}