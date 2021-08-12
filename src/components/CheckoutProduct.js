import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css"


function CheckoutProduct({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
       id: id, 
    });
  };
  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct-img" src={image} alt="" />

        <div className="checkoutProduct-info">
          <p className="checkoutProduct-title">{title}</p>

          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkoutProduct-rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p> ⭐️ </p>
              ))}
          </div>
          <button onClick= {removeFromBasket}> Remove from Basket </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
