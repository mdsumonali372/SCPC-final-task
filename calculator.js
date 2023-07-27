const calculateNum = (num1, num2, operator) => {
  if(operator === '+'){
    return num1 + num2;
  }else if(operator === '-'){
    return num1 - num2;
  }else if(operator === '*'){
    return num1 * num2;
  }else if(operator === '/'){
    return num1 / num2;
  }
};

console.log(calculateNum(5, 4, "*"));
