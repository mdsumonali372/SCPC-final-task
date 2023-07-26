const calculateNum = (num1, num2, operator) => {
  if (operator) {
    if ("+") {
      return num1 + num2;
    } else if ("-") {
      return num1 - num2;
    } else if ("*") {
      return num1 * num2;
    } else if ("/") {
      return num1 / num2;
    } else {
      return "Invalid Operator";
    }
  }
};

console.log(calculateNum(5, 4, "+"));
