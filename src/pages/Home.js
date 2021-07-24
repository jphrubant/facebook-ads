import React from "react";
import { Product } from "./../components/Product";

export const Home = ({ products, actions }) => {
  return (
    <>
      <div className="products">
        {products.map((product) => {
          return <Product product={product} actions={actions}/>;
        })}
      </div>
    </>
  );
};
