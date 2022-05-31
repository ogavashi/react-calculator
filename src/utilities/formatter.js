const formatter = new Intl.NumberFormat("en-us", { maximumFractionDigits: 0 });

export const formatOperand = (operand) => {
  if (operand == null) return;
  const [integer, decimal] = operand.toString().split(".");

  if (decimal == null) return formatter.format(integer);
  return `${formatter.format(integer)}.${decimal}`;
};
