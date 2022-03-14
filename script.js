var dt = new Date();
//var localDate = dt.toLocalDateString();
document.getElementById('date-time').innerHTML = dt;

var DateTime = luxon.DateTime;
console.log(DateTime);

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
var five = document.querySelector("#five");
// var fasFaLock = document.querySelectorAll(".fa-lock")
var buttons = document.querySelectorAll(".btn");
// Create a function that fires on click of the button fas fa lock

//create a forEach to loop through each element in the array and attach an event listener to that element

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event.target);
        console.log(event.target);
        var button = event.target;
        console.log(event.target.parentNode.parentNode);
        //var formTableData = event.target.parentNode.parentNode.previousElementSibling;
        //   console.log(formTableData.firstElementChild);
        var tempVal = event.target.parentNode.previousElementSibling.firstElementChild.firstElementChild.value;
        console.log(tempVal);
        var tempKey = event.target.parentNode.parentNode.firstElementChild.textContent;
        console.log(tempKey)// event listener code in here)

        // - To retreive saved data
        // localStorage.getItem("key");
        // - To Save new or update data
        // localStorage.setItem("key", "value");

        localStorage.setItem(tempKey, tempVal);
    });
});
// function handleButtonClick() {
//here would go the code that uses the variables on line 8 to grab the user input and then do whatever your want with that data.
//}

// Set up an eventListener that fires the above function whenever a button is clicked

//localStorage("KEY", value);
// localStorage("12PM", "Bingo")

// See if we have DATA for respecitve KEY
var nineAMData = localStorage.getItem("9AM");
console.log(nineAMData);

var tenAMData = localStorage.getItem("10AM");
console.log(tenAMData);

var elevenAMData = localStorage.getItem("11AM");
console.log(elevenAMData);

var twelvePMData = localStorage.getItem("12PM");
console.log(twelvePMData);

var onePMData = localStorage.getItem("1PM");
console.log(onePMData);

var twoPMData = localStorage.getItem("2PM");
console.log(twoPMData);

var threePMData = localStorage.getItem("3PM");
console.log(threePMData);

var fourPMData = localStorage.getItem("4PM");
console.log(fourPMData);

var fivePMData = localStorage.getItem("5PM");
console.log(fivePMData);
// IF we have DATA - update the DOM
nine.value = nineAMData;

ten.value = tenAMData;

eleven.value = elevenAMData;

twelve.value = twelvePMData;

one.value = onePMData;

two.value = twoPMData;

three.value = threePMData;

four.value = fourPMData;

five.value = fivePMData;



