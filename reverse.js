const isReverse = (letter) => {
  const lowerCase = letter.toLowerCase();

  let reversed = "";

  for (let i = lowerCase.length - 1; i >= 0; i--) {
    reversed += lowerCase[i];
  }
  return reversed;
};

console.log(isReverse("world"));
