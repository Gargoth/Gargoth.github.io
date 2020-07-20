var messages = ['*giggles*', 'Hehe, that tickles!', '*squirms*', 'Stop!', 'O-oh wait! It’s you! You’re here! ', 'Let me introduce myself! I’m Slime-chan! ', 'And I’m here to make your birthday the bestest, slimiest one yet!', 'Wait.', 'That came out wrong', '...', '*ehem*', 'So anyways! ', 'Before I get into it! Lemme tell you a joke!', "What's the con in eating a clock?", "It's time consuming", 'hihihihi get it!? ', 'cus clocks and time are related?', 'hahaha', 'great joke right?', '...', 'RIGHT!?', 'on a lighter note...', "..there is no lighter note", '*but slime chan thinks nothing can be a bigger joke than the ph government*', 'Hehe, I’m cute AND woke!', 'Much like someone else I know....', 'YOU!', 'Yes, you!', 'The great Angela Baticulon Napeñas! ', 'And today you’re turning', '*checks notes*', '19!!!', 'Woah!!!! ', '*huh. slime chan couldve sworn she was just 13*', 'W-what?? You didn’t hear that!!', '*blushes in embarrassment*', 'B-but take it as a compliment? ', '*puppy eyes*', 'Anyway!', 'Guess what!', 'I have a little something for you!', 'Slime-chan received a mailbox full of letters addressed to you and only you!', '*gets quiet*', 'A-and...don’t tell anyone but...', 'Slime chan ', 'may have accidentally ', 'Read some of them', '👉👈 ', 'A-and...slime chan thinks that Angela’s friends all love her', 'And are thankful for her being in their life...', 'A-and are happy to see her grow into an amazing person ...', 'B-but enough about that!!', 'I’ll let you read them yourself now!!!', 'Here are your letters!! Slime chan hopes you have a great birthday!!!']

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
