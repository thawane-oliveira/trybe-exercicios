const longest = (phrase) => {
  const wArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
}

console.log(longest('Você lembra de quantos pães comeu em toda a sua vida?'));