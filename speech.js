import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const colorSpans = document.querySelector('.colors');

function displayColors() {
  const html = colorsByLength
    .map(
      color =>
        `<span class="color ${isDark(color) ? 'dark' : ''} ${color}" style="background: ${color}">${color}</span>`
    )
    .join('');
  colorSpans.innerHTML = html;
}

function start() {
  // Does the user's browser support speech recognition
  if (!('SpeechRecognition' in window)) {
    console.log(
      `If using Chrome please enable 'Experimental Web Platform' features. If not using Chrome your browser does not support speech recognition.`
    );
    return;
  }
  // It works!
  console.log('Starting...');
  // Make a new speech recognition instance
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
displayColors();
