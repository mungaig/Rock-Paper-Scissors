
    let playerScore = 0;
    let computerScore = 0;
    let roundScore = 0;

    function getComputerChoice(){
        let choiceList = ['rock', 'paper', 'scissors'];
        let computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
        return computerChoice;
    }     
    
    function playRound(playerSelection, computerSelection){
        console.log(playerSelection);
        console.log(computerSelection);
        if(playerSelection === computerSelection){
            console.log('Draw! You both chose ' + playerSelection);       
        } else if(playerSelection === 'rock' && computerSelection === 'paper'){
            console.log('You lose! paper beats rock');
            return computerScore += 1;  
        } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            console.log('You lose! scissors beats paper');
            return computerScore += 1;  
        } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            console.log('You lose! You lose rock beats scissors');
            return computerScore += 1;
        } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            console.log('You win! rock beats scissors');
            return playerScore += 1;
        } else if(playerSelection === 'paper' && computerSelection === 'rock'){
            console.log('You win! paper beats rock');
            return playerScore += 1;
        } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log('You win! scissors beats paper');
            return playerScore += 1;
        }    
    }
    

    const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerChoice = button.id;
                playerSelection = playerChoice;
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                console.log(`Computer Score: ${computerScore}`);
                console.log(`Player Score: ${playerScore}`);
            });
        });


    