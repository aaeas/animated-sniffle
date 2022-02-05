var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

console.log("Connected");

console.log(moment().format("MMM Do YY"));

// Create ids for each text box so you can target the user input with a document.QuerySelector() and set it to a variable
var nine = document.QuerySelector("nine");
var ten = document.QuerySelector("ten");
var eleven = document.QuerySelector("eleven");
var twelve = document.QuerySelector("twelve");
var one = document.QuerySelector("one");
var two = document.QuerySelector("two");
var three = document.QuerySelector("three");
var four = document.QuerySelector("four");
var five = document.QuerySelector("five ");
var fasFaLock = document.QuerySelector(".fas fa-lock")

// Create a function that fires on click of the button fas fa lock
fasFaLock.addEventListener('click', function () {
});

// function handleButtonClick() {
    //here would go the code that uses the variables on line 8 to grab the user input and then do whatever your want with that data.
//}

// Set up an eventListener that fires the above function whenever a button is clicked