const secondSmallestNum = (number) => {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < number.length; i++) {
    if (number[i] < first) {
      second = first;
      first = number[i];
    } else if (number[i] < second && number[i] != first) {
      second = number[i];
    }
  }

  return second !== Infinity ? second : "No second smallest number found.";
};

let array = [10, 33, 5, 99, 6, 200];
console.log(secondSmallestNum(array));
