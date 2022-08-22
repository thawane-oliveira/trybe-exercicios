const check = (myBet, num) => myBet === num;

const drawn = (myBet, result) => {
  const num = Math.floor((Math.random() * 5) + 1);
  return result(myBet, num) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(drawn(5, check));