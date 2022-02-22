var dt = new Date();
//var localDate = dt.toLocalDateString();
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
var five = document.querySelector("#five");
var fasFaLock = document.querySelectorAll(".fa-lock")

// Create a function that fires on click of the button fas fa lock

//create a forEach to loop through each element in the array and attach an event listener to that element

fasFaLock.forEach(function (fasFaLock) {
    fasFaLock.addEventListener('click', function (event) {
        console.log(event.target);
        console.log(event.target.parentNode);
        var button = event.target.parentNode;
        console.log(event.target.parentNode.parentNode);
        let formTableData = event.target.parentNode.parentNode.previousElementSibling;
        console.log(formTableData.firstElementChild);
        var tempVal = event.target.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.value;
        console.log(tempVal);
        var tempKey = event.target.parentNode.parentNode.parentNode.firstElementChild.textContent;
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

// IF we have DATA - update the DOM
nine.value = nineAMData;

//var storage = JSON.parse(localStorage.getItem('highscore'))
//if (storage === null) {
//    storage = []
//}
//var user = {
//   name: input.value,
//    currentScore: score
//}
//console.log(user)
//storage.push(user)
//localStorage.setItem('highscore', JSON.stringify(storage));
// call for highscores
//displayHighScore();
//});