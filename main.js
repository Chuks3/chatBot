const bot = document.querySelector('#bot');
const user = document.querySelector('#user');
const button = document.getElementsByTagName('button')[0];

user.focus();

let userMsg = "";
let botMsg = "";
let questionTrack = 'mood';

const responses = [
    "Okay, I'm good. How's your day?",
    "Good for you, how are things?",
    "You should get a life, are you in theraphy?",
    "I like you, do you have a partner?",
    "You should leave now, have you been online in a while?",
    "You should stay, so what do you want to talk about?"
];

button.addEventListener('click', clickHandler, false);
window.addEventListener('keydown', keydownHandler, false);

function clickHandler() {
    startBot();
}

function keydownHandler(e) {
    if (e.keyCode === 13){
        startBot();
    }
}

function startBot() {
    userMsg = user.value.toLowerCase();
    if (questionTrack == 'mood') {
        moodAnalysis();
    }
    else if (questionTrack == 'color') {
        colorAnalysis();
    }
    else if (questionTrack == 'dog') {
        dogAnalysis();
    }
    else{
        responsesCal();
    }
    bot.textContent = botMsg;
    user.value = "";
}

function moodAnalysis() {
    if (userMsg.indexOf("good") !== -1 || userMsg.indexOf('okay') !== -1 || userMsg.indexOf('great') !== -1) {
        botMsg = "Glad to hear it. What's your favorite color?";
        questionTrack = 'color';
    }
    else if (userMsg.indexOf('bad') !== -1) {
        botMsg = "You sound depressed. Do you like dogs?";
        questionTrack = 'dog';
    }
    else {
        responsesCal();
    }
}

function colorAnalysis() {
    if (userMsg.indexOf('red') !== -1) {
        botMsg = 'You sound romantic. Do you have a partner?';
        questionTrack = 'love';
    }
    else if (userMsg.indexOf('blue') !== -1) {
        botMsg = 'Blue is sad, are you depressed?';
        questionTrack = 'sad';
    }
    else if (userMsg.indexOf('purple') !== -1) {
        botMsg = 'Purple is royalty. Are you royalty, or related to?';
        questionTrack = 'royalty';
    }
    else if (userMsg.indexOf('pink') !== -1) {
        botMsg = 'Pink is girly, are you a girl?';
        questionTrack = 'girl';
    }
    else if (userMsg.indexOf('green') !== -1) {
        botMsg = 'Green is manly, are you a guy?';
        questionTrack = 'male';
    }
    else {
        responsesCal();
    }
}

function dogAnalysis() {
    if (userMsg.indexOf('yes') !== -1) {
        botMsg = 'So do I, do you have a dog?';
        questionTrack = 'dogOwner';
    }
    else if (userMsg.indexOf('no') !== -1) {
        botMsg = 'Hmm, interesting. Do you like cats?';
        questionTrack = 'cat';
    }
    else {
        responsesCal();
    }
}

function responsesCal() {
    if (responses.length > 0){
        const newResponse = Math.floor(Math.random() * responses.length);
        botMsg = responses[newResponse];
        responses.splice(newResponse, 1);
    } 
    else{ 
        botMsg = "I am done.";
    }
}