'use strict';
window.addEventListener('load', () => {
console.log("index.js loaded");

let h1 = document.createElement('h1');
let msg = document.createTextNode('Hello');

h1.appendChild(msg);

document.body.appendChild(h1);
});
