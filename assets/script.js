// page loads
    // loads a random word from wordbank, but it is underscores

let wordBank = ['frog', 'sheep', 'alligator', 'raven', 'tiger', 'platypus']
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
let undScore = []



function init() {
    for (let i = 0; i < randWord.length; i++) {
        undScore.push('_');
    }
    // wordGuesser();
    console.log(randWord);
    console.log(undScore);
}



function wordGuesser(event) {
    var keyPress = event.key;
    if (randWord.includes(keyPress)) {
        undScore.replace(randWord.charAt(keyPress), keyPress)
    } else return;
    document.querySelector('#wordArea').textContent = undScore;

}

console.log(wordBank);

document.addEventListener('keydown', wordGuesser);
 init();