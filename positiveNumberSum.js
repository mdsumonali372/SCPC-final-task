const isPositive = (number) => {
  let positiveNumber = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      positiveNumber += number[i];
    }
  }
  return positiveNumber;
};

const numberInput = [2, -5, 10, -3, 7];

console.log(isPositive(numberInput));
