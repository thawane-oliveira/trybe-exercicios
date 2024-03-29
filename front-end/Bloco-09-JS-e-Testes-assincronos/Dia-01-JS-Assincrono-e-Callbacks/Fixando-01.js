const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  return callback(user);
};

console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"