var messages = ['OMG!!', 'you just clicked me *blushes*', 'that’s the first time anyone’s ever clicked me! (this is a sex joke omg feel free to take this out)', 'AYIEEEEEEEE', 'my name is slime-chan!', 'and slime-chan is here to make your day the bestest day ever!', '*in quarantine*', '…', '*ahem*', 'but enough about me,', 'it’s you!', 'you’re the fabled Angela Baticulon Napenas!', 'and today you’re turning…', '*check’s notes*', '19!!', '*wow, slime-chan could’ve sworn she was only 13*', 'W-what? You didn’t hear that!!', '*ahem* ANYWAYS', 'HAPPY BIRTHDAY ANGELA!!', 'OOH!', 'I have a little something for you', 'Slime-chan received a mailbox full of letters addressed to you and only you!', 'are you ready to read them?', 'you know you want to ', 'you cant resist the temptation for long!', 'BUT BEFORE YOU GO', 'do you want to here a joke?', 'YES YOU DO!!!', 'THE JOKE IS…….', 'us.', 'we are all jokes.', '.', '*ahem*', 'Here are your letters!']
// var messages = ['1', '2', '3']


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
        nextButton.innerHTML = '<a href="./letters.html">Letters</a>'
    }
}

var chatlist = document.getElementsByClassName("chat-message-list")[0];
var i = 0;