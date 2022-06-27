import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "first item",
    desc: "this is the first item",
    price: 7,
  },
  {
    id: "p2",
    title: "second item",
    desc: "this is the second item",
    price: 12,
  },
  {
    id: "p3",
    title: "third item",
    desc: "this is the third item",
    price: 4,
  },
];

const ProductsList = () => {
  return (
    <section className="wrapper max-w-none mt-4">
      <div className="max-w-[45rem] mx-auto space-y-3 rounded-md">
        <h4 className="text-center capitalize text-2xl">
          buy your favorite products
        </h4>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
