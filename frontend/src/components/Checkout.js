import { connect } from "react-redux";
import { checkout } from "../actions";

const Checkout = ({ amount, checkout }) => {
  return (
    <div id="checkoutDiv">
      <p>{"Total Price: $" + amount}</p>
      <button id="checkoutButton" onClick={checkout}>
        CHECKOUT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const amount = state.amount;
  return { amount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => {
      console.log("#$%#$%#$%#$#$%#");
      dispatch(checkout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
