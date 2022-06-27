import React from "react";
import { useSelector } from "react-redux";
import CartList from "./components/cart/CartList";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/ProductsList";

const App = () => {
  const show = useSelector((state) => state.toggle.show);

  return (
    <>
      <Navbar />
      {show && <CartList />}
      <ProductsList />
    </>
  );
};

export default App;
