import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions";
import Checkout from "./Checkout";

const Cart = () => {
  const cartList = useSelector((state) => state.cart);

  return (
    <div id="cartDiv">
      <h2>{"CART"}</h2>
      <p>{"CLICK ON PRODUCT TO REMOVE FROM CART"}</p>
      <div id="productsCart">
        {cartList.map((product, index) => {
          return <CartProduct key={index} object={product} />;
        })}
      </div>
      <Checkout />
    </div>
  );
};

const CartProduct = ({ object }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p onClick={() => dispatch(removeFromCart(object))}>
        {object.name + "  $" + object.price}
      </p>
    </div>
  );
};

export default Cart;
