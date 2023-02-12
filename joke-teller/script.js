const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
let voice = '';


function tellJoke(joke, voice) {
  VoiceRSS.speech({
    key: 'f0f57934b1364c3095d0d65026d291a9',
    src: joke,
    hl: 'en-us',
    v: voice,
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

async function getJoke() {
	const germanJoke = 'https://v2.jokeapi.dev/joke/Any?lang=de&type=single';
	const anyJoke = 'https://v2.jokeapi.dev/joke/Any';
	try {
		const res = await fetch(anyJoke);
		const data = await res.json();
		if (data.setup) {
			voice = 'Linda';
			tellJoke(data.setup, voice);
			audioElement.addEventListener('ended', function delivery() {
				voice = 'John';
				tellJoke(data.delivery, voice);
				audioElement.removeEventListener('ended', delivery);
			});
		} else {
			voice = 'Amy';
			tellJoke(data.joke);
		}
	} catch (err) {
		console.error(err);
	}
}
	
button.addEventListener('click', getJoke);