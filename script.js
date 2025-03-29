    //DOM 
    const container = document.querySelector('#container');
    const playerChoice = document.querySelector('#player-choice');
    const computerChoice = document.querySelector('#computer-choice');
    const roundWinner = document.querySelector('#round-winner');
    const gameWinner = document.querySelector('#game-winner');
    const computerScr = document.querySelector('#computer-score');
    const playerScr = document.querySelector('#player-score');  
    
    //Play logic
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');

    function getComputerChoice(){
        let choiceList = ['rock', 'paper', 'scissors'];
        let computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
        return computerChoice;
    }     
    
    function playRound(playerSelection, computerSelection){
        playerChoice.textContent = `You: ${playerSelection}`;       
        computerChoice.textContent = `Computer: ${computerSelection}`;

        if(playerSelection === computerSelection){
            roundWinner.textContent = 'Draw! You both chose ' + playerSelection;       
        } else if(playerSelection === 'rock' && computerSelection === 'paper'){
            roundWinner.textContent = 'You lose! paper beats rock';
            return computerScore += 1;  
        } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            roundWinner.textContent = 'You lose! scissors beats paper';
            return computerScore += 1;  
        } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            roundWinner.textContent = 'You lose! You lose rock beats scissors';
            return computerScore += 1;
        } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            roundWinner.textContent = 'You win! rock beats scissors';
            return playerScore += 1;
        } else if(playerSelection === 'paper' && computerSelection === 'rock'){
            roundWinner.textContent = 'You win! paper beats rock';
            return playerScore += 1;
        } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            roundWinner.textContent = 'You win! scissors beats paper';
            return playerScore += 1;
        }    
    }
    
    function playGame(){
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerChoice = button.id;
                playerSelection = playerChoice;
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                playerScr.textContent = playerScore;
                computerScr.textContent = computerScore;
                checkGame();
            });
        });
    }

    function checkGame(){
        let gameIsOver = false;
        if(playerScore === 5 || computerScore === 5){
            gameIsOver = true;
            console.log('Game Over!!!');
            buttons.forEach((button) => {
                button.disabled = true;
            });
            if(playerScore > computerScore){
                gameWinner.textContent = 'Congratulations: You win the game!';
            } else {
                gameWinner.textContent = 'Computer wins! better luck next time';
            }
            resetGame();
        }
    }

    function resetGame(){     
        const resetBtn = document.createElement('button');
        resetBtn.innerText = 'Play Again';
        container.appendChild(resetBtn);
        resetBtn.classList.toggle('reset-btn');

        resetBtn.addEventListener('click', () => {
                buttons.forEach((button) => {
                button.disabled = false;
                playerScore = 0;
                computerScore = 0;
                playerChoice.textContent = '';
                computerChoice.textContent = '';
                gameWinner.textContent = '';
                computerScr.textContent = '';
                playerScr.textContent = ''; 
                roundWinner.textContent= '';
                gameWinner.textContent = '';               
                resetBtn.remove(); 
            });        
        });
    }
    
   playGame(); 