function updateLetter() {
    letterHandler.innerHTML = letters.text[currentLetter];
}

function next() {
    currentLetter++;
    if (currentLetter >= letters.text.length) {
        currentLetter = 0
    }
    updateLetter();
}

function back() {
    currentLetter--;
    if (currentLetter < 0) {
        currentLetter = letters.text.length - 1;
    }
    updateLetter();
}

console.log("functions loaded");

var letters = {
    "text": [
        '1',
        '2',
        '3',
        '4'
    ],
    "images": [
        'q',
        'w',
        'e',
        'r'
    ]
}

console.log("letters loaded");

var letterHandler = document.getElementsByClassName("letter-handler")[0];
var currentLetter = 0;

console.log("vars loaded")

updateLetter();