import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/ui-slice";

const Navbar = () => {
  const amount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <header className="bg-dark-3">
      <nav className="wrapper flex justify-between items-center">
        <h1 className="text-light-2 text-3xl">ReduxCart</h1>
        <button
          className="my-cart flex items-center gap-2 p-3 py-2 text-primary border-2 border-primary rounded-md transition hover:bg-primary hover:text-dark-2"
          onClick={() => dispatch(toggleActions.toggleVisibility())}
        >
          My Cart
          <span className="grid place-content-center min-w-[2rem] h-8 p-2 bg-primary text-dark-2 rounded-full transition">
            {amount}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
