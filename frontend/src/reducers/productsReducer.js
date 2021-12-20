import {
  removeUnavailableProducts,
  decreaseQuantityOfItem,
  increaseQuantityOfItem,
} from "../helper";

const mockData = [
  { name: "avocado", price: 14, quantity: 4 },
  { name: "banana", price: 7, quantity: 4 },
  { name: "chips", price: 2, quantity: 4 },
];

const productsReducer = (state = mockData, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return decreaseQuantityOfItem([...state], action.payload);
    case "REMOVE-FROM-CART":
      return increaseQuantityOfItem([...state], action.payload);
    case "CHECKOUT":
      return removeUnavailableProducts([...state]);
    default:
      return state;
  }
};

export default productsReducer;
