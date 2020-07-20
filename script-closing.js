var messages = ['Awww...', '*sniffles*', 'W-what??', "SLIME-CHAN TOTALLY WASN'T CRYING", 'N-no YOU WERE CRYING!!', '*sniffles*', '...', 'OH!!', 'How could I forget!!', "There's just one last thing your friends wanted me to give you.", "Slime-chan just knows you'll love it!", '*giggles*', 'Are you ready?', 'A-are we ever really ready??', 'WHO KNOWS!!', 'BUT HERE GOES!!', 'HEEEEEERE!!', 'GOEEEEEES!!',]

function newMessage() {
    if (i < messages.length) {
        let message = document.createElement("li");
        message.setAttribute("class", "chat-message");
        message.setAttribute("height", 0);
        message.innerHTML = messages[i];
        i++;
        chatlist.insertBefore(message, chatlist.firstChild);
    }
    if (i >= messages.length) {
        let nextButton = document.getElementsByClassName("next-button")[0];
        nextButton.innerHTML = '<a href="./yt-link.html">Final Surprise!</a>'
    }
}

var chatlist = document.getElementsByClassName("chat-message-list")[0];
var i = 0;
