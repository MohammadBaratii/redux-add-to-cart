import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/exports";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <section className="wrapper max-w-none">
      <div className="max-w-[35rem] mx-auto space-y-3 p-4 bg-dark-3 rounded-md">
        <h4 className="capitalize">your shopping cart</h4>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CartList;
