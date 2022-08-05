const submit = document.querySelector('#sendButton');
const clearAll = document.querySelector('#clear');
const agreement = document.querySelector('#agree');
const inputs = document.querySelectorAll('input');
const texts = document.querySelector('textarea');

function clear() {
  for (let index = 0; index < inputs.length; index += 1) {
    const textUser = inputs[index];
    textUser.value = '';
    textUser.checked = false;
  }
  texts.value = '';
}

function enable() {
  submit.disabled = !agreement.checked;  
}

function validate() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email.value < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const answer = document.querySelector('#answer').value.length;
  const invalidAnswer = answer > 500;

  if (invalidEmail || invalidName || invalidAnswer) {
    return false;
  } {
    return true;
  }
}

function youCantSend (event) {
  event.preventDefault();
  const validation = validate();
  if (validation === false) {
    alert('Dados inválidos');
  } {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

window.onload = function () { 
  submit.addEventListener('click', youCantSend);
  clearAll.addEventListener('click', clear);
  agreement.addEventListener('change', enable)
};


