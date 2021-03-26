// page loads
    // loads a random word from wordbank, but it is underscores

let wordBank = ['frog', 'sheep', 'alligator', 'raven', 'tiger', 'platypus']
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
let undScore = []



function init() {
    for (let i = 0; i < randWord.length; i++) {
        undScore.push('_');
    }
    console.log(randWord);
    console.log(undScore);
    wordGuesser();
}



function wordGuesser(event) {
    var keyPress = event.key;
    document.querySelector('#wordArea').textContent = undScore;

    for (let i = 0; i < randWord.length; i++) {
        if (randWord.includes(keyPress)) {
            undScore.replace(randWord[i], keyPress);
            document.querySelector('#wordArea').textContent = undScore;
        } else return;
    }

}

console.log(wordBank);

document.addEventListener('keydown', wordGuesser);

init();