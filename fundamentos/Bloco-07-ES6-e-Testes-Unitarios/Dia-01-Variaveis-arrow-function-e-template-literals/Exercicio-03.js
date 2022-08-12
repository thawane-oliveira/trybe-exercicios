const fatorial = (n) => {
  let result = 1;

  for (let index = 1; index <= n; index += 1) {
    result *= index;
  }
  return result;
};

const log = fatorial(5);

console.log(`Esse é o fatorial: ${log}`);