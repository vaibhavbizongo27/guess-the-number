
let randomNumber = Math.floor(Math.random() * 100);



const guessSubmit = document.getElementById("guessSubmit");
const guessInput = document.getElementById("guessInput");


const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const low_or_high = document.querySelector(".low_or_high");

let guessCount = 1;
let resetButton;


function guessCheck() {
    const userNumber = Number(guessInput.value);

    if (guessCount === 1) {
        guesses.textContent = `Previous guesses: `;
    }

    guesses.textContent += `${userNumber} `


    if (userNumber === randomNumber) {
        lastResult.textContent = "Congratulations!! Your guess is right!";
        lastResult.style.backgroundColor = "green";
        low_or_high.textContent = " ";

        gameOver();
    }
    else if (guessCount == 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lastResult.style.backgroundColor = "red";
        low_or_high.textContent = '';

        gameOver();
    }
    else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userNumber > randomNumber) {
            low_or_high.textContent = "Your last guess was too high!";
        }
        else if (userNumber < randomNumber) {
            low_or_high.textContent = "Your last guess was too low!"
        }
    }

    guessCount++;
    guessInput.value = '';
    guessInput.focus();

}

guessSubmit.addEventListener('click', guessCheck);

function gameOver() {

    guessInput.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);

    resetButton.addEventListener("click", resetGame);
}

function resetGame() {

    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessCount = 1;

    const resetParas = document.querySelectorAll(".guessParas p");

    for (const resetPara of resetParas) {
        resetPara.textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessInput.value = ' ';
    guessInput.focus();

    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100);
}




