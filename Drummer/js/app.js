let drums = document.querySelectorAll(".drum");
let sounds = {"w": "sounds/bass.wav",
	"a": "sounds/snare.wav",
	"s": "sounds/hihat.wav",
	"d": "sounds/tom1.wav",
	"j": "sounds/ride.wav",
	"k": "sounds/crash.wav",
	"l": "sounds/tom2.wav"
}
for (let i=0; i < drums.length; i++) {
	drums[i].addEventListener("click", function() {
	makeNoise(this.innerHTML);
	buttonAnimation(this.innerHTML);
    });

}

document.addEventListener("keydown", function(event) {
	makeNoise(event.key);
	buttonAnimation(event.key);
});

function makeNoise(key) {
		let audio = new Audio(sounds[key]);
		audio.play();
}

function buttonAnimation(key) {
	let activeKey = document.querySelector("." + key);
	var letter = activeKey.innerHTML;
	activeKey.classList.add("pressed");
	activeKey.innerHTML = "";

	setTimeout(function() {
		activeKey.classList.remove("pressed");
		activeKey.innerHTML = letter;
	}, 200);
}

