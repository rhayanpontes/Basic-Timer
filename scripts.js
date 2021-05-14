let hour = 0;
let minutes = 0;
let seconds = 0;

let chrono;

function start() {
  chrono = setInterval(() => {
    timer();
  },1000);
}

function pause() {
  clearInterval(chrono);
}

function stop() {
  clearInterval(chrono);

  hour = 0;
  minutes = 0;
  seconds = 0;

  document.querySelector('#dp-timer').innerHTML = '00:00:00';
}

function timer() {
  seconds++;

  if(seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if(minutes == 60) {
    minutes = 0;
    hour++;
  }

  let format =
  (hour < 10 ? '0' + hour : hour) +
  ':' +
  (minutes < 10 ? '0' + minutes : minutes) +
  ':' +
  (seconds < 10 ? '0' + seconds : seconds);

  document.querySelector('#dp-timer').innerHTML = format;
}


// *===========================
//  Another Way of Timer
//      =========================*

// function startChrono(duration, display) {
//   let timer = duration, minutes, seconds;

//   setInterval(function() {
//     minutes = parseInt(timer / 60,10);
//     seconds = parseInt(timer % 60,10);

//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     display.textContent = minutes + ':' + seconds;

//     if(--timer <0) {
//       timer = duration;
//     }
//   },1000);

// }

// window.onload = function() {
//   let duration = 60 * 5;
//   let display = document.querySelector('#timer');

//   startChrono(duration, display);
// }