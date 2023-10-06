const game = () => {
	let pScore = 0;
	let cScore = 0;
	let moves = 0;
    let tieScore = 0;

	
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const pOptions = [rockBtn,paperBtn,scissorBtn];
		const cOptions = ['rock','paper','scissors']
		
		
		pOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNum = Math.floor(Math.random()*3);
				const computerChoice = cOptions[choiceNum];

				
				winner(this.innerText,computerChoice)
				
				
				if(moves == 10){
					gameOver(pOptions,movesLeft);
				}
			})
		})
		
	}

	
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const pScoreBoard = document.querySelector('.p-count');
		const cScoreBoard = document.querySelector('.c-count');
       const tScoreBoard = document.querySelector(".t-count")
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'you and ai chose the same thing, Tie'
            tieScore++
            tScoreBoard.textContent = tieScore
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'you lost ai chose paper';
				cScore++;
				cScoreBoard.textContent = cScore;

			}else{
				result.textContent = 'you win ai chose scizzors'
				pScore++;
				pScoreBoard.textContent = pScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'you lose, ai chose rock';
				cScore++;
				cScoreBoard.textContent = cScore;
			}else{
				result.textContent = 'you win, ai chose paper';
				pScore++;
				pScoreBoard.textContent = pScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'you lose, ai chose scizzors';
				cScore++;
				cScoreBoard.textContent = cScore;
			}else{
				result.textContent = 'you win, ai chose rock';
				pScore++;
				pScoreBoard.textContent = pScore;
			}
		}
	}

	
	const gameOver = (pOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		pOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'the game is over now.'
		movesLeft.style.display = 'none';

		if(pScore > cScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won brodie'
			result.style.color = 'purple';
		}
		else if(pScore < cScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You lost loser';
			result.style.color = 'Navy';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'red'
		}
		
	}
	playGame();
	
}
game();
