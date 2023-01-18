import './style.css'
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

window.$ = $;
window._ = _;

console.log('underscore', _);
console.log('jquery', $);


import AppRouter from './router';

// Execute after the DOM has loaded
Backbone.$(() => {
    console.log('frontend entry point');

    // initialize Router
    new AppRouter();

    // startup history
    Backbone.history.start();
});
/*
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
