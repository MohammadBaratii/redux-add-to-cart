import { configureStore } from "@reduxjs/toolkit";
import toggle from "./ui-slice";
import cart from "./cart-slice";

const store = configureStore({
  reducer: { cart: cart, toggle: toggle },
});
export default store;
