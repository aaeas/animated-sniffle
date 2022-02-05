var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

console.log("Connected");

console.log(moment().format("MMM Do YY"));

// Create ids for each text box so you can target the user input with a document.QuerySelector() and set it to a variable
var nine = document.querySelector("#nine");
var ten = document.querySelector("#ten");
var eleven = document.querySelector("#eleven");
var twelve = document.querySelector("#twelve");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five ");
var fasFaLock = document.querySelector(".fas")
console.log("button clicked")

// Create a function that fires on click of the button fas fa lock
fasFaLock.addEventListener('click', function () {
    console.log("click")
});

// function handleButtonClick() {
    //here would go the code that uses the variables on line 8 to grab the user input and then do whatever your want with that data.
//}

// Set up an eventListener that fires the above function whenever a button is clicked