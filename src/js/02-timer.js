import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  start: document.querySelector('button[data-start]'),
  input: document.getElementById('datetime-picker'),

  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}

let intervalID = null
let isActive = false

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr("#datetime-picker", options)


refs.start.addEventListener('click', timerStart)


function timerStart() {
  let date = new Date(refs.input.value);
  
  if (isActive) {
    return
  }

  isActive = true

  intervalID = setInterval(() => {
    let tick = null
    let currentTime = Date.now();
    tick = date - currentTime
    convertMs(tick)
    console.log(`${days}:${hours}:${minutes}:${seconds}`);

  }, 1000);
  
}



addEventListener

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


