const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return state + action.payload.price;
    case "REMOVE-FROM-CART":
      return state - action.payload.price;
    case "CHECKOUT":
      return 0;
    default:
      return state;
  }
};

export default amountReducer;
