"use strict";

var btnClick = document.getElementById('toggle-btn');
var enterName = document.getElementById('user-name');
var inputName = document.getElementById('text-hello');

btnClick.onclick = function () {
  var val = document.getElementById('user-name').value;
  console.log(val);
  btnClick.classList.toggle('hidden');
  enterName.classList.toggle('hidden');
  inputName.innerHTML = "Hello ".concat(val, "!");
  inputName.classList.toggle('visible');
};