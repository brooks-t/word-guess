// page loads
    // loads a random word from wordbank, but it is underscores

let wordBank = ['frog', 'sheep', 'alligator', 'raven', 'tiger', ]
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)]
let undScore = []



function init() {
    wordGuesser();
}


function wordGuesser(event) {
    var keyPress = event.key;
    document.querySelector('#wordArea').textContent = undScore;

    for (let i = 0; i < randWord.length; i++) {
        undScore.push('_');
        if (randWord.includes(keyPress)) {
            undScore.replace(randWord.charAt(keyPress), keyPress)
        } else return;
    }
}

console.log(wordBank);

document.addEventListener('keydown', wordGuesser);

init();