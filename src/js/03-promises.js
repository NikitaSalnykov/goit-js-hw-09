import Notiflix from 'notiflix'; 

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  clickToClose: true ,
});

import "flatpickr/dist/flatpickr.min.css";

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button[type="submit"]'),
}

let delayValue = 0
let stepValue = 0
let amount = 0
refs.submit.disabled = false;
let delaySum = 0

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  
  refs.submit.disabled = true;
  delayValue = +refs.delay.value
  stepValue = +refs.step.value
  amount = +refs.amount.value
  delaySum = delayValue
  

  for (let i = 1; i <= amount; i += 1) {
    
    
  createPromise(i, delaySum)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    if (i === amount) {
    refs.submit.disabled = false
  }
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    if (i === amount) {
    refs.submit.disabled = false
  }
  
  });
    delaySum += stepValue;
  }




}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
        return new Promise((resolve, reject) => {
setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay})
      } else {
          reject({position, delay})
      }
}, delaySum);
      })
  
}


