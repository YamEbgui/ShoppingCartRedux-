import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import amountReducer from "./amountReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  amount: amountReducer,
});

export default rootReducer;
