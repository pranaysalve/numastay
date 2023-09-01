export const calDiscountedPrice = (price, discount) => {

  return calTax(price - price * (+discount / 100), 12);
};

const calTax = (totalPrice, tax) => {
  const cal = totalPrice + totalPrice * (+tax / 100);
  return cal.toFixed(2);
};
