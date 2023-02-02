// Para gerar o token utilizar a função randomBytes, do módulo crypto do Node, dessa forma abaixo:

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;