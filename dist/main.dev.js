"use strict";

var btnClickEl = document.getElementById('toggle-btn');
var enterNameEl = document.getElementById('user-name');
var spanNameEl = document.getElementById('text-hello');

btnClickEl.onclick = function () {
  var val = document.getElementById('user-name').value;
  console.log(val);
  btnClickEl.classList.toggle('hidden');
  enterNameEl.classList.toggle('hidden');
  spanNameEl.innerHTML = "Hello ".concat(val, "!");
  spanNameEl.classList.toggle('visible');
};