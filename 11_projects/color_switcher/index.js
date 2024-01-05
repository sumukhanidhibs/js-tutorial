const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
let previousButton = null;
const switchButton = document.querySelector('.toggle-switch');
let originalBodyColor = null;
let originalButtonColors = [];

function resetToOriginalState() {
  body.style.backgroundColor = `#${originalBodyColor}`;
  buttons.forEach((button, index) => {
    button.style.backgroundColor = `#${originalButtonColors[index]}`;
  });
} 
buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (previousButton !== null) {
      body.style.backgroundColor = `#${previousButton.id}`;
      previousButton.style.backgroundColor = `#${previousButton.id}`;
    }
    body.style.backgroundColor = `#${e.target.id}`;
    e.target.style.backgroundColor = '#00000036';
    previousButton = e.target;
    e.stopPropagation();
  });
});

body.addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') {
    body.style.backgroundColor = '';
    if (previousButton !== null) {
      previousButton.style.backgroundColor = `#${previousButton.id}`;
      previousButton = null;
    }
    // clearInterval(intervalId);
    // intervalId = null;
    // switchButton.textContent = 'Switch (OFF)';
  }
});

let intervalId = null;

switchButton.addEventListener('click', function () {
  let index = 0;

  if (intervalId === null) {
    intervalId = setInterval(() => {
      buttons[index].click();
      index = (index + 1) % buttons.length;
      console.log(index)
    }, 1000);
    switchButton.textContent = 'Switch (ON)';
  } else {
    resetToOriginalState();
    clearInterval(intervalId);
    intervalId = null;
    switchButton.textContent = 'Switch (OFF)';
  }
});