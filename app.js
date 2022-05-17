const body = document.getElementById("game");
const header = document.querySelector("#header");

// Player 1 variables
const areaPlayer1 = document.getElementById("areaPlayer1");
const scoreContainer1 = document.querySelector(".score-container-1");
const scorePlayer1 = document.getElementById("scorePlayer1");
const imageContainer1 = document.querySelector(".image-container-1");
const imagePlayer1 = document.getElementById("imagePlayer1");
const rollText1 = document.getElementById("rollText1");
const rollPlayer1 = document.getElementById("rollPlayer1");
const passPlayer1 = document.getElementById("passPlayer1");
const playAgain1 = document.getElementById("playAgain1");

// Player 2 variables
const areaPlayer2 = document.getElementById("areaPlayer2");
const scoreContainer2 = document.querySelector(".score-container-2");
const scorePlayer2 = document.getElementById("scorePlayer2");
const imageContainer2 = document.querySelector(".image-container-2");
const imagePlayer2 = document.getElementById("imagePlayer2");
const rollText2 = document.getElementById("rollText2");
const rollPlayer2 = document.getElementById("rollPlayer2");
const passPlayer2 = document.getElementById("passPlayer2");
const playAgain2 = document.getElementById("playAgain2");

let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

// Which Player will roll first
if ((currentPlayer = 1)) {

	rollText1.textContent = "Player 1 is rolling";
} else if ((currentPlayer = 2)) {

	rollText2.textContent = "Player 2 is rolling";
}

// Winning logic
const winPlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} - Winner!`;

	player1Total = 0;
};
const losePlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} - You lost!`;

	player1Total = 0;
};
const winPlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} - Winner!`;

	player2Total = 0;
};
const losePlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} - You lost!`;

	player2Total = 0;
};

// Player 1
rollPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText1.style.display = "none";
		imageContainer1.style.display = "block";
		imagePlayer1.src = `./images/${currentRoll}.png`;


		player1Total += currentRoll;
		scorePlayer1.textContent = player1Total;

		if (player1Total >= 20) {
			// Player 1 Wins
			body.style.backgroundColor = "#FFDE00";
			winPlayer1();
			// Player 2 Loses
			rollText2.textContent = "Better luck next time.";
			losePlayer2();
		} else {
			if (currentRoll == 1) {
				// PLayer 1 Loses
				body.style.backgroundColor = "#161822";
				losePlayer1();
				// Player 2 Wins
				rollText2.textContent = "It's your lucky day!";
				winPlayer2();
			}
		}
	}
});

// Player 2
rollPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText2.style.display = "none";
		imageContainer2.style.display = "block";
		imagePlayer2.src = `images/${currentRoll}.png`;

		player2Total += currentRoll;
		scorePlayer2.textContent = player2Total;

		if (player2Total >= 20) {
			// Player 2 Wins
			body.style.backgroundColor = "#FFDE00";
			winPlayer2();
			// Player 1 Loses
			rollText1.textContent = "Maybe don't pass next time.";
			losePlayer1();
		} else {
			if (currentRoll == 1) {
				// Player 2 Loses
				body.style.backgroundColor = "#161822";
				losePlayer2();
				// Player 1 Wins
				rollText1.textContent = "It's your lucky day!";
				winPlayer1();
			}
		}
	}
});

// Pass Buttons
passPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		currentPlayer = 2;
		rollText2.textContent = "Roll your dice!";
	
	}
});
passPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		currentPlayer = 1;
	
	}
});

// Play again  Buttons
playAgain1.addEventListener("click", () => {
	window.location.reload();
});
playAgain2.addEventListener("click", () => {
	window.location.reload();
});

// Instruction Button
let a;
function show_hide()
{
	if(a==1)
		{
			document.getElementById('header').style.display='inline';
			return a=0;
		}
	
	else 
		{
			document.getElementById('header').style.display='none';
			return a=1;
		}
}
