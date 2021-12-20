import { removeProduct } from "../helper";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      let newCart = [...state];
      newCart.push({
        name: action.payload.name,
        price: action.payload.price,
      });
      return newCart;
    case "REMOVE-FROM-CART":
      return removeProduct([...state], action.payload);
    case "CHECKOUT":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
