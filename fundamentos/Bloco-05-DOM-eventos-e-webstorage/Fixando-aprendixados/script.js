
document.getElementById('header-container').style.backgroundColor = 'green'

document.querySelector('.emergency-tasks').style.backgroundColor = '#FFA07A'

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#F0BE00'

const tarefasEmergenciais = document.querySelectorAll ('.emergency-tasks h3');

// tarefasEmergenciais [0].style.backgroundColor = 'purple';
// tarefasEmergenciais [1].style.backgroundColor = 'purple';

for (item of tarefasEmergenciais) {
    item.style.backgroundColor = 'purple';
}


const naoEmergenciais = document.querySelectorAll ('.no-emergency-tasks h3');

for (item of naoEmergenciais) {
    item.style.backgroundColor = 'black'
}