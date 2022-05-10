import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import iconArrow from "@icons/flechita.svg";
import "@styles/MyOrder.scss";
import React, { useContext } from "react";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    return state.cart.reduce(reducer, 0);
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconArrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem key={`orderItem-${product.id}`} product={product} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
