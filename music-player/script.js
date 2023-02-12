const image = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const music = document.querySelector('audio');
const progresContainer = document.getElementById('progress-container');
const progress = document.querySelector('.progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const volumeDisplay = document.querySelector('#vol');


const songs = [
  {
  name: 'jacinto-1',
  displayName: 'Electric Chill Machine',
  artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight Disco Queen',
    artist: 'Jacinto Design'
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design'
  }
];

let isPlaying = false;
let vol = 0.5;

function playSong() {
  isPlaying = !isPlaying;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
  music.volume = vol;
}

function pauseSong() {
  isPlaying = !isPlaying;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

playBtn.addEventListener('click', () => !isPlaying ? playSong() : pauseSong());

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
}

function nextSong() {
  songIndex++;
  if (songIndex === songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length -1;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

let songIndex = 0;

loadSong(songs[songIndex]);

function fixTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = (`0${Math.floor(sec % 60)}`).slice(-2);
  return `${minutes}:${seconds}`
}

function updateProgressBar(e) {
  const { duration, currentTime } = e.srcElement;
  const songLength = fixTime(duration);
  const timePassed = fixTime(currentTime);
  const percent = 100 * currentTime / duration;
  progress.style.width = `${percent}%`;
  currentTimeEl.textContent = timePassed;
  durationEl.textContent = songLength;
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const newPosition = clickX * 100 / width;
  const { duration } = music;
  const newTime = clickX * duration / width;
  music.currentTime = newTime;
  currentTimeEl.textContent = fixTime(newTime);
  progress.style.width = `${newPosition}%`
}
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progresContainer.addEventListener('click', setProgressBar);
music.addEventListener('ended', nextSong);
volumeDisplay.addEventListener('mousewheel', (e) => {
  if (e.deltaY < 0) {
    vol += 0.01;
    if (vol > .99) {
      vol = 1;
    }
  } else if (e.deltaY > 0) {
    vol -= 0.01;
    if (vol < 0) {
      vol = 0;
    }
  }
  volumeDisplay.textContent = `Vol: ${Math.ceil(vol * 100)}`;
  music.volume = vol;
})