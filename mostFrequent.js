const mostFrequent = (arr) => {
  let maxCount = 0;
  let maxFreq = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxFreq = arr[i];
    }
  }

  return maxFreq;
};

const arr = [40, 50, 30, 40, 50, 30, 30];
console.log(mostFrequent(arr));
