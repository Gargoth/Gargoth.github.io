function updateLetter() {
    letterHandler.innerHTML = letters[currentLetter] + " - " + currentLetter;
}

function next() {
    currentLetter++;
    if (currentLetter >= letters.length) {
        currentLetter = 0
    }
    updateLetter();
}

function back() {
    currentLetter--;
    if (currentLetter < 0) {
        currentLetter = letters.length - 1;
    }
    updateLetter();
}

console.log("functions loaded");

var letters = [
    "andie",
    "cyrus",
    "harvey",
    "joaquin",
    "justin",
    "sam",
    "yanna",
    "lei",
    "dani",
    "jose",
    "audrey**",
    "cj"
]

var images = [] // src for small pics

console.log("letters loaded");

var letterHandler = document.getElementsByClassName("letter-handler")[0];
var currentLetter = 0;

console.log("vars loaded")

updateLetter();