let insButton = document.getElementById('insButton');
let header = document.getElementById('header');
let rollPlayer1 = document.getElementById('rollPlayer1');
let passPlayer1 = document.getElementById('passPlayer1');
let playAgain1 = document.getElementById('playAgain1');
let imagePlayer1 = document.getElementById('imagePlayer1');
let scoreContainer1 = document.getElementById('score-container-1');
let totalWins1 = document.getElementById('total-wins-1');
let rollText1 = document.getElementById('rollText1');
let rollPlayer2 = document.getElementById('rollPlayer2');
let passPlayer2 = document.getElementById('passPlayer2');
let playAgain2 = document.getElementById('playAgain2');
let imagePlayer2 = document.getElementById('imagePlayer2');
let scoreContainer2 = document.getElementById('score-container-2');
let totalWins2 = document.getElementById('total-wins-2')
let rollText2 = document.getElementById('rollText2');

let Player1Score = 0 
let Player2Score = 0
let Player1TotalWins = 0
let Player2TotalWins = 0
let a;

// Buttons functionality
rollPlayer1.addEventListener('click', () => {
	let currentRoll = Math.ceil(Math.random()*6)
	imagePlayer1.src = `./images/${currentRoll}.png`
	Player1Score += currentRoll
	scoreContainer1.textContent = `Score: ${Player1Score}`
	rollText1.textContent = 'Roll your dice!'
	if (Player1Score >= 20) {
		Player1TotalWins += 1
		rollText1.textContent = 'Player 1 Wins'
		Player1Score = 0
		Player2Score = 0
		scoreContainer1.textContent = `Score: ${Player1Score}`
		scoreContainer2.textContent = `Score: ${Player2Score}`
		totalWins1.textContent = `Wins: ${Player1TotalWins}`
	}

	else if (currentRoll == 1) {
		Player2TotalWins += 1
		rollText1.textContent = 'Player 1 Lose!'
		Player1Score = 0
		Player2Score = 0
		scoreContainer1.textContent = `Score: ${Player1Score}`
		scoreContainer2.textContent = `Score: ${Player2Score}`
		totalWins2.textContent = `Wins: ${Player2TotalWins}`
	}
}); 

passPlayer1.addEventListener('click', () => {
	if (a == true) {
		passPlayer2.style.display = 'inline', 
		rollPlayer2.style.display = 'inline', 
		playAgain2.style.display = 'inline'
		return a = false
	}

	else if (
		passPlayer1.style.display = 'none', 
		rollPlayer1.style.display = 'none', 
		playAgain1.style.display = 'none') {
		return a = true
	}

	// else {
	// 	passPlayer1.style.display = 'none'
	// 	rollPlayer1.style.display = 'none'
	// 	playAgain1.style.display = 'none'
	// 	return a = true
	// }

// 	rollPlayer1.style.display = 'none'
// 	rollPlayer2.style.display = 'absolute'
// })

// passPlayer2.addEventListener('click', () => {
// 	rollPlayer2.style.display = 'none'
// 	rollPlayer1.style.display = 'absolute'
})

playAgain1.addEventListener('click', () => {
	window.location.reload()
})

rollPlayer2.addEventListener('click', () => {
	let currentRoll = Math.ceil(Math.random()*6)
	imagePlayer2.src = `./images/${currentRoll}.png`
	Player2Score += currentRoll
	scoreContainer2.textContent = `Score: ${Player2Score}`
	rollText2.textContent = 'Roll your dice!'
	if (Player2Score >= 20) {
		Player2TotalWins += 1
		rollText2.textContent = 'Player 2 Wins'
		Player1Score = 0
		Player2Score = 0
		scoreContainer1.textContent = `Score: ${Player1Score}`
		scoreContainer2.textContent = `Score: ${Player2Score}`
		totalWins2.textContent = `Wins: ${Player2TotalWins}`
	}

	else if (currentRoll == 1) {
		Player1TotalWins += 1
		rollText2.textContent = 'Player 2 Lose!'
		Player1Score = 0
		Player2Score = 0
		scoreContainer1.textContent = `Score: ${Player1Score}`
		scoreContainer2.textContent = `Score: ${Player2Score}`
		totalWins1.textContent = `Wins: ${Player1TotalWins}`
	}
});

passPlayer2.addEventListener('click', () => {
	if (a == true) {
		passPlayer1.style.display = 'inline', 
		rollPlayer1.style.display = 'inline', 
		playAgain1.style.display = 'inline'
		return a = false
	}

	else if (
		passPlayer2.style.display = 'none', 
		rollPlayer2.style.display = 'none', 
		playAgain2.style.display = 'none') {
		return a = true
	}
})

playAgain2.addEventListener('click', () => {
	window.location.reload()
})

insButton.addEventListener('click', () => {
	if (a == true) {
		header.style.display = 'inline'
		return a = false
	}

	else {
		header.style.display = 'none'
		return a = true
	}
})