//Let's make sure that it is working...
console.log('Welcome to Hangman!')

var numofGuessesLeft = document.getElementById('guesses-left');
var spaces = document.getElementById('spaces')
//first, we need to create variables to determine lives, letters, and guesses
const lives = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var isGameRunning = false;
//var wordContainer = document.querySelector('wordContainer')
var word = '';
var wordSelection = ['Kim  Kardashian', 'Kylie  Jenner', 'Rihanna'];
var wordSelectionSpaces = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
var guessedLetter = [];
var guessedIncorrect = [];

//variable for canvas
// var canvas = document.getElementById('canvas-id');
// var context = canvas.getContext('2d');
// context.strokeStyle = 'purple';
// context.lineWidth = '3';
// context.fillStyle = 'yellow';
// context.fillRect(100, 100, 50, 100);
// context.moveTo(0,300);
// context.lineTo(400,500);
// stroke();

//Create function to start/restart a new game
function Game() {
    isGameRunning = true;
    guessesLeft = 6;
    guessedLetters = [];
    incorrectLetters = [];
    wordSelectionSpaces = [];
    //Select a random word below..
    word = wordSelection[Math.floor(Math.random() * wordSelection.length)];

    for (var i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            wordSelectionSpaces.push(' ');
        } else {
            wordSelectionSpaces.push('_ ');
        }
    }
    guessesLeft.textContent = guessesLeft;
    spaces.textContent = wordSelectionSpaces.join(' ');

}

//This is the function to Press Key to Start Game
function startGame() {
    var x = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//var wordContainer = document.getElementsByClassName('word-container')[0];
function letterAttempt(letter) {


    //console.log(letter);

    if (isGameRunning === true) {
        //run game
        guessedLetter.push(letter);
        let foundLetter = false;
        for (var i = 0; i < word.length; i++) {
            if (word[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                foundLetter = true;
                wordSelectionSpaces[i] = word[i];
            } else {
                numofGuessesLeft.innerHTML = guessesLeft--;
            }
        }
        spaces.textContent = wordSelectionSpaces.join('');
        // } else {
        //     alert("Click START GAME")
        //     //numofGuessesLeft.innerHTML = guessesLeft--;
    }


    //for loop to cycle through words in array
    var answers = [];
    for (var i = 0; i < word.length; i++) {
        answers[i] = "_ ";
        //  wordContainer.innerHTML += answers[i]

    }
}

function incorrect(letter) {
    if (wordSelectionSpaces.indexOf(letter.toLowerCase()) === -1)
        //wordSelectionSpaces.indexOf(letter) {
        numofGuessesLeft.innerHTML--;
    numofGuessesLeft.textContent = guessesLeft;
}

//function to see if win

//function to see if lose


// var remaining = word.length;
// document.body.innerHTML(answers.join(''))
// console.log(answers)
// // while (remaining > 0) {
// //     alert(answers.join(''));
// // }

//var guess = prompt('Guess a letter!!');
// if (guessedLetter == null) {
//     //exit the game
// } else if (guessLetter.length !== 1) {
//     alert('please enter in a single letter');
// } else {
//     //update game with guess
//     for (g = 0; g < word.length; g++) {
//         if (word[g] === guess) {
//             answers[g] = guess;
//             guessesleft--;
//         }
//     }
// }

// //alert(answers.join(''));
// //alert("good job!!!")
// // so, we need to figure out how to get the "hangman" to display. Let's use canvas..
// //function to hide "start"

// for (let i = 0; i < word.length; i++) {
// 	if (word[i] === 'e') {
// 		console.log(word[i])
//         console.log(i)
// }

// }




// var A = document.querySelector('A')
// A.addEventListener('click', function(){
//     wordContainer.innerHTML = "A"
// })

//const key = document.querySelectorAll('.key')

const key = document.querySelectorAll('.key')

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener('click', function (e) {
        console.log('click')
        console.log(e.target.id)
        letterAttempt(e.target.id)
        //     // if (word[i].includes([i])) {
        //     //     console.log(letterAttempt(letter))
        //     // } else {
        //     //     console.log('Nope')
        //     // }
    })
}




document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        startGame(event.key);

    }
}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterAttempt(event.key);
    }
}

document.getElementById('start').addEventListener('click', Game);


// window.addEventListener('keydown',function(e) {
//     console.log(e)
// })