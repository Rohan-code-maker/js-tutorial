let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1  || guess > 100){
        alert('Please enter a valid Number between 1 to 100')
    }else{
        prevGuess.push(guess)
        displayGuess(guess)
        if(numGuess === 11){
            // displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            // displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOO Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    remaining.innerHTML = `${10 - numGuess}`
    numGuess++
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.setAttribute('disabled','')
    // p.classList.add('button') //code for adding class attribute
    p.innerHTML = `<button id="newGame">Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newgame = document.querySelector('#newGame')
    newgame.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess= []
        numGuess = 1
        remaining.innerHTML = `${11 - numGuess}`
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}