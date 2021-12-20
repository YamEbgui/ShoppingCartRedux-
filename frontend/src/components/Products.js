import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions";

const Products = () => {
  const productList = useSelector((state) => state.products);

  return (
    <div id="productsDiv">
      <h2>{"PRODUCTS"}</h2>
      {productList.map((product, index) => {
        return <Product key={index} object={product} />;
      })}
    </div>
  );
};

const Product = ({ object }) => {
  const dispatch = useDispatch();
  return (
    <div id="productDiv">
      <p>
        {object.name + "  $" + object.price + " quantity: " + object.quantity}
      </p>
      <button
        className="productButton"
        disabled={!object.quantity > 0}
        onClick={() => dispatch(addToCart(object))}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Products;
