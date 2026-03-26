import axios from "axios";

const Checkout = () => {

  const placeOrder = async () => {
    const order = {
      items: [],
      total: 500
    };

    await axios.post("http://localhost:5000/api/order", order);
    alert("Order Placed!");
  };

  return (
    <button onClick={placeOrder}>
      Place Order
    </button>
  );
};

export default Checkout;