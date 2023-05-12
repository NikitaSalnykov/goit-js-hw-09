import flatpickr from "flatpickr";
import Notiflix from 'notiflix'; 

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  clickToClose: true,
});

import "flatpickr/dist/flatpickr.min.css";

const refs = {
  start: document.querySelector('button[data-start]'),
  input: document.getElementById('datetime-picker'),

  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  now: Date.now(),

  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
      if (selectedDates[0].getTime() < this.now) {
        refs.start.disabled = true
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        refs.start.disabled = false 
    } 
  },
};

let intervalID = null
let isActive = false
let tick = null
refs.start.disabled = true
const fp = flatpickr("#datetime-picker", options)

refs.start.addEventListener('click', timerStart)

function timerStart() {

  let date = new Date(refs.input.value);
  
  if (isActive) {
    return
  }

  isActive = true

  intervalID = setInterval(() => {
    let currentTime = Date.now();

    refs.start.disabled = true
    tick = date - currentTime
    console.log(tick);
    if (tick > 0) {
      const convert = convertMs(tick)
      console.log(`${pad(convert.days)} : ${pad(convert.hours)} : ${pad(convert.minutes)} : ${pad(convert.seconds)}`);

      refs.days.textContent = pad(convert.days)
      refs.hours.textContent = pad(convert.hours)
      refs.minutes.textContent = pad(convert.minutes)
      refs.seconds.textContent = pad(convert.seconds)
    } else {
      clearInterval(intervalID);
      isActive = false
    }
  }, 1000);

}

  function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(number) {
return String(number).padStart(2, '0')
}


