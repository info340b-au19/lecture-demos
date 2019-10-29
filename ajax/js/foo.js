'use strict';

   let promise = fetch(url)
    let updatedBuzzer = promise.then(function(response){
        let encodePromise = response.json() //extract json content from response
        return encodePromise;       
    })
    
    // so now we can do the callback for the updated buzzer... here we're no longer in a promise
    updatedBuzzer.then(function(data){
        console.log(data);
    })

    // replace "promise" with fetch(url)

    
    let updatedBuzzer = fetch(url).then(function(response){
        let encodePromise = response.json() //extract json content from response
        return encodePromise;       
    })
    
       updatedBuzzer.then(function(data){
        console.log(data);
    })

    //return encodePromise directly rather than making a middleman

    let updatedBuzzer = fetch(url).then(function(response){
               return response.json();       
    })
    
        updatedBuzzer.then(function(data){
        console.log(data);
    })


    // updatedBuzzer is what we're calling .then on so just replace that whole line instead of the variable

fetch(url).
    then(function(response){
        return response.json();       
    }).
    then(function(data){
    console.log(data);
})
