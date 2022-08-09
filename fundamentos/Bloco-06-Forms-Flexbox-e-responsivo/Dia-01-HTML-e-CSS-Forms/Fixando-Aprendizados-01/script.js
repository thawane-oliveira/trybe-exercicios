// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function youShallNotPass(event) {
  event.preventDefault()
}

HREF_LINK.addEventListener('click', youShallNotPass);

//

function youShallNotClick(event) {
  event.preventDefault()
}

INPUT_CHECKBOX.addEventListener('click', youShallNotClick);

//

function onlyA(event) {
  if (event.key !== 'a') {
    event.preventDefault()
  }
}

INPUT_TEXT.addEventListener('keypress', onlyA);