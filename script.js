var enterBtn = document.getElementByClassName("enterButton");

enterBtn.addEventListener('click', function () {
    enterBtn.setAttribute('class', 'hidden')
});

console.log("Connected");

console.log(moment().format("MMM Do YY"));