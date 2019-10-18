// Make a counter that increased by 1 every second on page load
const counter = document.getElementById("counter")
let count = 0

function secondCounter() {
    count++;
    counter.innerHTML = count
}

timer = setInterval("secondCounter()", 1000)
let isPaused = false;

// make a pause button
const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", function() {
    if (!isPaused){
        clearInterval(timer);
        isPaused = true;
    } else {
        timer = setInterval("secondCounter()", 1000)
        isPaused = false;
    }
})

