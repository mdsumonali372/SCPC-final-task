const targetValue = (number, target) => {
  for (let i = 0; i < number.length - 1; i++) {
    console.log(number[i]);
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const arr = [1, 3, 2, 6, 7];
const targetNumber = 9;

console.log(targetValue(arr, targetNumber));