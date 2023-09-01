export const currencyformat = (price) => {
  const number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return number.format(price);
};
