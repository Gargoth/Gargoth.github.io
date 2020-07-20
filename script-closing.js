var messages = ['1', '2', '3', 'last message']

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
