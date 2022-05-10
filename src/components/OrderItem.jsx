import AppContext from "@context/AppContext";
import iconClose from "@icons/icon_close.png";
import "@styles/OrderItem.scss";
import React, { useContext } from "react";

const OrderItem = ({ product }) => {
  const { images, title, price } = product;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconClose} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
