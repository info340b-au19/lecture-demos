'use strict';

let state = {

    sortorder: 'default',
    filter: 'default'
};

function renderDataList(data) {
    let list = document.querySelector('ol');
    list.innerHTML = ''; //empty out old
    data.forEach((item) => {
        list.appendChild(renderDataItem(item));
    });
}

function renderDataItem(data) {

    let li = document.createElement('li');
    let textoncard = data.name + ' age: ' + data.age;
    li.textContent = textoncard;
    console.log(data);
    return li;
}

let form = document.querySelector('form');                      // grab the form element
form.addEventListener('submit', function (event) {               // listen for when the submit event occurs
    event.preventDefault();                                     // prevent the default behavior from happening (
    console.log("Form sumbmitted!");


    fetch("data/employees.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderDataList(data);
        })
})

let sortbybutton = document.querySelector('#sortbutton')
sortbybutton.addEventListener('click', function (event) {
    console.log("sort button clicked");
    sortList();
})

let filterbutton = document.querySelector('#filterbutton')
filterbutton.addEventListener('click', function (event) {
    console.log("filter button clicked");
    filterList();
})

function sortList() {
    console.log("sorting");
}

function filterList() {
    console.log("filtering");

}

