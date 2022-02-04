var enterBtn = document.querySelector(".enterButton");

var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

enterBtn.addEventListener('click', function () {
    enterBtn.setAttribute('class', 'hidden')
});

console.log("Connected");

console.log(moment().format("MMM Do YY"));