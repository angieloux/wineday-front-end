export const inCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};
