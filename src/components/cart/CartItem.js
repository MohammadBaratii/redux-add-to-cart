import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ id, title, price, amount, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-3 p-3 bg-dark-1 rounded">
      <div className="flex justify-between items-center">
        <p className="text-xl">{title}</p>
        <div>
          <p className="text-xl">
            ${totalPrice.toFixed(2)}{" "}
            <span className="text-light-4 text-sm">
              (${price.toFixed(2)}/item)
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>
          x<span className="text-xl">{amount}</span>
        </p>
        <div className="space-x-3">
          <button
            className="p-3 py-1 text-primary border border-primary rounded hover:bg-primary/10"
            onClick={() => {
              dispatch(cartActions.removeFromCart(id));
            }}
          >
            -
          </button>
          <button
            className="p-3 py-1 text-primary border border-primary rounded hover:bg-primary/10"
            onClick={() => {
              dispatch(cartActions.addToCart({ id, title, price }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
