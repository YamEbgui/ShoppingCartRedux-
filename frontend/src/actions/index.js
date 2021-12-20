export const addToCart = (product) => ({
  type: "ADD-TO-CART",
  payload: product,
});

export const removeFromCart = (product) => ({
  type: "REMOVE-FROM-CART",
  payload: product,
});

export const checkout = () => ({
  type: "CHECKOUT",
});
