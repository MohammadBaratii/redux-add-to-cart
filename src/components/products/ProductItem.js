import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = ({ id, title, desc, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-3 p-3 bg-light-2 text-dark-2 rounded-md">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="p-3 py-1 bg-dark-2 text-light-2 rounded-full font-semibold">
          ${price.toFixed(2)}
        </p>
      </div>
      <p className="text-neutral-500 font-medium">{desc}</p>
      <button
        className="flex items-center gap-1 ml-auto p-3 py-2 bg-primary rounded-md transition hover:bg-primary-darker hover:text-light-2"
        onClick={() => dispatch(cartActions.addToCart({ id, title, price }))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
