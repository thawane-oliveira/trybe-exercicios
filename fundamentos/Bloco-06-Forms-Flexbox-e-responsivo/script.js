function youCantSend (event) {
  event.preventDefault();
}

function clear() {
  const inputs = document.querySelectorAll('input');
  const texts = document.querySelector('textarea');
  for (let index = 0; index < inputs.length; index += 1) {
    const textUser = inputs[index];
    textUser.value = '';
    textUser.checked = false;
  }
  texts.value = '';
}

window.onload() = function () {
  const submit = document.querySelector('#sendButton');
  submit.addEventListener('click', youCantSend);
  const clearAll = document.querySelector('#clear');
  clearAll.addEventListener('click', clear);
};