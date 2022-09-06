const { log } = require("console");

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const temperature = getMarsTemperature();
  setTimeout(() => console.log(`A temperatura de Marte é: ${temperature} graus celsius`), messageDelay());
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo