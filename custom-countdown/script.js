const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');
const timeEl = document.getElementById('time-picker');
const titleEl = document.getElementById('title');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span')
const alarm = new Audio('alarm1.mp3');


let countdownTitle = '';
let countdownDate = '';
let cdTime = [];
let cdHours = 0;
let cdMinutes = 0;
let countdownValue = new Date();

let savedCountdown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const cet = hour;
const cest = hour * 2;

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeButton = document.getElementById('complete-button');

let countdownActive;

//  Set Date Input Min with Today's Date

let today = new Date().toISOString().split('T')[0];

dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI

function updateDOM() {
  countdownActive = setInterval (() => {
    const now = new Date().getTime();
    const distance = (countdownValue + cdHours + cdMinutes) - (now + cest);
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance / hour) % 24);
    const minutes = Math.floor((distance / minute) % 60);
    const seconds = Math.floor((distance / second) % 60);

    const timeRemaining = [days, hours, minutes, seconds];

    //  Show - Hide Containers

    inputContainer.hidden = true;

    if (distance < 0) {
      countdownEl.hidden = true;
      completeEl.hidden = false;
      alarm.play();
      const endDate = new Date().toLocaleDateString();
      clearInterval(countdownActive);
      completeElInfo.textContent = `${countdownTitle} beendet am ${endDate}`;
    } else {
      completeEl.hidden = true;
      countdownEl.hidden = false;

      countdownElTitle.textContent = countdownTitle;
      timeElements.forEach((span, i) => {
        span.textContent = timeRemaining[i];
      })
    }
  }, 1000);
}

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = titleEl.value;
  countdownDate = dateEl.value;
  cdTime = timeEl.value;

  if (cdTime) {
    cdHours = Number(cdTime.split(':')[0]);
    cdMinutes = Number(cdTime.split(':')[1]);
    cdHours *= hour;
    cdMinutes *= minute;
  }

  localStorage.setItem('settings', JSON.stringify({
    title: countdownTitle,
    date: countdownDate,
    time: cdTime,
    hours: cdHours,
    minutes: cdMinutes
  }));
  
  if (countdownDate === '') {
    alert('So nicht mein Freund!');
  } else {
    // get Milliseconds Version of countdownDate
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

// Reset Countdown

function resetCountdown() {
  completeEl.hidden = true;
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  countdownTitle = '';
  countdownDate = '';
  clearInterval(countdownActive);
  alarm.pause();
  localStorage.removeItem('settings');
  console.log('reset');
}

function restore() {
  if (localStorage.getItem('settings')) {
    inputContainer.hidden = true;
    const settings = JSON.parse(localStorage.getItem('settings'));
    countdownTitle = settings.title;
    countdownDate = settings.date;
    cdTime = settings.time;
    cdHours = settings.hours;
    cdMinutes = settings.minutes;
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }   
}

countdownForm.addEventListener('submit', updateCountdown);
countdownButton.addEventListener('click', resetCountdown); 
completeButton.addEventListener('click', resetCountdown); 

restore();