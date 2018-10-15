//Let's make sure that it is working...
console.log('Welcome to Hangman!')

var numofGuessesLeft = document.getElementsByClassName('guesses-left');
var spaces = document.getElementById('spaces')
//first, we need to create variables to determine lives, letters, and guesses
const lives = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var isGameRunning = false;
var word = '';
var wordSelection = ['Kim Kardashian', 'Kylie Jenner', 'Rihanna'];
var wordSelectionSpaces = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
var guessedLetter = [];
var guessedIncorrect = [];

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
    console.log(letter);

    if (isGameRunning === true) {
        //run game
        guessedLetter.push(letter);
        for (var i = 0; i < word.length; i++) {
            if (word[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                wordSelectionSpaces[i] = word[i];
            }
        }
        spaces.textContent = wordSelectionSpaces.join('');
    } else {
        alert("Click START GAME")
    }


    //for loop to cycle through words in array
    var answers = [];
    for (var i = 0; i < word.length; i++) {
        answers[i] = "_ ";
        wordContainer.innerHTML += answers[i]

    }
}



//function to see if win

//function to see if lose


// var remaining = word.length;
// document.body.innerHTML(answers.join(''))
// console.log(answers)
// // while (remaining > 0) {
// //     alert(answers.join(''));
// // }

// var guess = prompt('Guess a letter!!');
// if (guess == null) {
//     //exit the game
// } else if (guess.length !== 1) {
//     alert('please enter in a single letter');
// } else {
//     //update game with guess
//     for (g = 0; g < word.length; g++) {
//         if (word[g] === guess) {
//             answers[g] = guess;
//             remaining--;
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


// function clickKey(k) {
//     for (let i=0; i < alphabet.length; i++) 
//     console.log(k)
// }

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