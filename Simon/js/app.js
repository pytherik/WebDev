let soundFlow = [];
let playerFlow = [];

const sounds = {
	yellow: "sounds/yellow.mp3",
	red: "sounds/red.mp3",
	green: "sounds/green.mp3",
	blue: "sounds/blue.mp3",
	wrong: "sounds/wrong.mp3"
}

const fields = {
	1: "yellow",
	2: "red",
	3: "green",
	4: "blue"
}

let started = false;
let level = 1;
$(document).on("keydown", function(e) {
	if (!started && e.key === " ") {
		started = true;
		addToFlow();
	};
});

$(".field").click(function() {
	
	let choice = $(this).attr("id");
	playerFlow.push(choice);
  
	playSound(choice);
	
	$("." + choice).addClass("pressed");
	setTimeout(function() {
		$("." + choice).removeClass("pressed");
	}, 100);

	checkAnswer(playerFlow.length -1);
});


function checkAnswer(currentLevel) {
	if (soundFlow[currentLevel] === playerFlow[currentLevel]) {
		if (playerFlow.length === soundFlow.length) {
			setTimeout(function() {
				addToFlow();
			}, 500);
		};
	} else {
		playSound("wrong");
		$("h1").text("Game Over! Hit Space To Restart!");
		for(let i=0; i <= 3; i++) {
			setTimeout(function() {
				$("body").toggleClass("game-over");
			}, 130);
		};
    startOver();
	};
};

function addToFlow() {
	playerFlow = [];
	$("h1").text("Level: " + level);
	level++;
	color = Math.ceil(Math.random() * 4)
	let field = fields[color]
	
	setTimeout(() => {
		$("." + field).addClass("pressed");
		setTimeout(() => {
		$("." + field).removeClass("pressed");
		}, 200);
	playSound(field);}, 500);
	
	soundFlow.push(field);
};

function playSound(name) {
	let sound = new Audio(sounds[name]);
	sound.play();
}

function startOver() {
	level = 1;
	soundFlow = [];
	started = false;
};

