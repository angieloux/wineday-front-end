export const capitalize = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

export const truncate = (str, limit) => {
  return str.slice(0, limit) + "...";
};

export const formatPrice = (total) => {
  return `$${total.toFixed(2)}`;
};
