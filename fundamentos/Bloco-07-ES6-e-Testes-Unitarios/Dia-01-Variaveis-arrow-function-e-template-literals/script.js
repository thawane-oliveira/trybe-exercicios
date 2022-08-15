const counter = document.getElementById('click');
const button = document.getElementById('button');
let nOfClick = 0;

button.addEventListener('click', () => counter.innerHTML = nOfClick += 1);