const submit = document.querySelector('#sendButton');
const clearAll = document.querySelector('#clear');

function youCantSend (event) {
  event.preventDefault();
}

window.onload = function () {
  submit.addEventListener('click', youCantSend);
};