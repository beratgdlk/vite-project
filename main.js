import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function greetUser() {
  alert('Welcome to Vite!');
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = '#f0f0f0';
}

function displayCurrentTime() {
  const timeElement = document.querySelector('#current-time');
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

function toggleTextVisibility() {
  const textElement = document.querySelector('#toggle-text');
  textElement.style.display = textElement.style.display === 'none' ? 'block' : 'none';
}

function increaseFontSize() {
  const textElement = document.querySelector('#font-size-text');
  const currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
  textElement.style.fontSize = (currentSize + 2) + 'px';
}

function changeTextColor() {
  const textElement = document.querySelector('#color-text');
  textElement.style.color = textElement.style.color === 'blue' ? 'red' : 'blue';
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="greet" type="button">Greet</button>
      <button id="change-bg" type="button">Change Background</button>
      <button id="toggle-text-btn" type="button">Toggle Text</button>
      <button id="increase-font-btn" type="button">Increase Font Size</button>
      <button id="change-color-btn" type="button">Change Text Color</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p id="current-time"></p>
    <p id="toggle-text">This text can be toggled.</p>
    <p id="font-size-text">This text can increase in size.</p>
    <p id="color-text">This text can change color.</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
document.querySelector('#greet').addEventListener('click', greetUser);
document.querySelector('#change-bg').addEventListener('click', changeBackgroundColor);
document.querySelector('#toggle-text-btn').addEventListener('click', toggleTextVisibility);
document.querySelector('#increase-font-btn').addEventListener('click', increaseFontSize);
document.querySelector('#change-color-btn').addEventListener('click', changeTextColor);
setInterval(displayCurrentTime, 1000);
