//Let's make sure that it is working...
console.log('Welcome to Hangman!')

//first, we need to set variables
const lives = 0;
var word = '';
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v','w','x','y','z']

//Select a random word below..
var wordSelection = ['Kim Karsashian', 'Kylie Jenner', 'Rihanna'];
var word = wordSelection[Math.floor(Math.random() * wordSelection.length)];


//for loop to cycle through words in array
var answers = [];
for (var i = 0; i  < word.length; i++) {
    answers[i] = "_";
}
var remaining = word.length;

while (remaining > 0) {
    alert(answers.join(''));
}

var guess = prompt('Guess a letter!!');
if (guess == null) {
    //exit the game
    break;
} else if (guess.length !== 1) {
    alert('please enter in a single letter');
} else {
    //update game with guess
    for (g = 0; g < word.length; g++) {
        if (word[g] === guess) {
            answers[g] = guess;
            remaining--;
        }
    }
}

alert(answers.join(''));
alert("good job!!!")
// so, we need to figure out how to get the "hangman" to display. Let's use canvas..
//function to hide "start"
function hideStart() {
    var x = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

















window.addEventListener('keydown',function(e) {
    console.log(e)
})





//Now, we are creating buttons for our categories. 


//After the variables are created, we can use a function to create a playing area