'use strict';
window.addEventListener('load', () => {
console.log("index.js loaded");

let h1 = document.createElement('h1');
let msg = document.createTextNode('Hello');

let h2 = document.createElement('h2');
let msgl = document.createTextNode('Hello');

h1.appendChild(msg);
h2.appendChild(msgl);

document.body.appendChild(h1);
document.body.appendChild(h2);
});
