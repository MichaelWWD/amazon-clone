import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg"
            alt="checkout-ad-image"
          />

          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout-title">Your Shopping Basket</h2>
              {basket.map((item) => {
                console.log(item.id);
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
        {basket.length > 0 && (
            <div className="checkout-right">
                <Subtotal/>
            </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
