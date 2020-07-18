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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam amet, iste recusandae eaque molestiae quo suscipit nobis exercitationem dolores, culpa optio quasi, quam ducimus doloremque dolorem? Debitis, suscipit doloribus eos ipsum cumque exercitationem, vel labore quidem ipsa eaque, quae perferendis atque esse delectus maxime blanditiis adipisci assumenda excepturi eius amet? Accusantium rerum vero dolor aliquid voluptates perferendis eligendi, sunt expedita dolore? Sint reprehenderit facilis maxime debitis dolores maiores animi, id a amet non, officia placeat beatae rerum consequatur vel odit mollitia, nostrum cupiditate dolor! Earum ea atque minima iusto corporis voluptatum alias. Eaque distinctio est dolorum. A illum eaque nesciunt ex iste earum harum sed excepturi molestias quasi quas obcaecati, sequi ratione doloremque nisi voluptatibus dolorem fugit tenetur, aliquid, tempora ea at quod. Doloremque blanditiis repellat praesentium enim. Asperiores, pariatur! Dolores, non. Vero dicta iusto, laboriosam similique excepturi tempore minima. Magnam doloribus sequi necessitatibus. Similique omnis magni dolor quam natus rerum. Culpa veniam quas illum vitae asperiores! Sapiente officia voluptates ea ut animi totam perferendis, quas corporis minus. Excepturi unde quis officiis porro! Eum impedit natus expedita exercitationem, architecto praesentium et. Laboriosam rem atque doloremque autem iste dicta magnam dolorum? Rerum laborum corporis nisi dolores ipsum quasi officia pariatur?',
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