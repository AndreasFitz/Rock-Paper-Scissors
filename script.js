
let computerSelection;
let playerSelection;
let playerWinTotal = 0;
let computerWinTotal = 0;
const para = document.querySelector('.outputPara');
const buttons = document.querySelectorAll("button");

function computerPlay() {
    let ai = Math.floor(Math.random()* 100);
    console.log(ai)
    if (ai <= 33) {
        computerSelection = "Rock";
        console.log("Rock ai");
    } else if (ai > 33 && ai <= 67) {
        computerSelection = "Paper"
        console.log("Paper ai");
    } else {
       computerSelection = "Scissor"
        console.log("Scissor ai");
    }

}

function gameResult()  {
    if (playerWinTotal == 3 && playerWinTotal > computerWinTotal) {
        para.textContent ="You Won!"
    } else if (computerWinTotal == 3 && computerWinTotal > playerWinTotal) {
        para.textContent ="You Lost!"
    } else if (playerWinTotal == 3 && computerWinTotal == 3) {
        para.textContent ="Its a Draw!";
    } 
    console.log(playerWinTotal);
    console.log(computerWinTotal);
}

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection)
     if (playerSelection == "Rock" && computerSelection == "Scissor") {
        para.textContent = "You won! Rock beats Scissor";
        return playerWinTotal++;
    } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        para.textContent = "You won! Scissor beats Rock";
        return playerWinTotal++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        para.textContent = "You won! Paper Beats Rock";
        return playerWinTotal++;
    }  else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        para.textContent = "You lost! Scissor Beats Paper";
        return computerWinTotal++;
    }   else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        para.textContent = "You lost! Rock Beats Scissor";
        return computerWinTotal++;
    }   else if (playerSelection == "Rock" && computerSelection == "Paper") {
        para.textContent = "You lost! Paper Beats Rock";
        return computerWinTotal++;
    } else {
        para.textContent = "Its a draw!";
    }
}

function gameResult()  {
    if (playerWinTotal == 3 && playerWinTotal > computerWinTotal) {
        para.textContent ="You Won! Refresh the page to try again";
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissor").disabled = true;
    } else if (computerWinTotal == 3 && computerWinTotal > playerWinTotal) {
        para.textContent ="You Lost! Refresh the page to try again";
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissor").disabled = true;
    } else if (playerWinTotal == 3 && computerWinTotal == 3) {
        para.textContent ="Its a Draw! Refresh the page to try again";
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissor").disabled = true;
    } 
    console.log(playerWinTotal);
    console.log(computerWinTotal);
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerWinTotal;
        computerWinTotal;
        playerSelection = button.value;
        computerPlay();
        playRound(playerSelection,computerSelection);
        gameResult();
    })
})