export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const cur = parseFloat(currentOperand);

  if (isNaN(cur) || isNaN(prev)) return "";

  let result = "";

  switch (operation) {
    case "+":
      result = prev + cur;
      break;
    case "-":
      result = prev - cur;
      break;
    case "×":
      result = cur * prev;
      break;
    case "÷":
      result = prev / cur;
      break;
    case "+/-":
      result = cur * -1;
      break;
    default:
      return "";
  }

  return result.toString();
};
