import React from "react";
import { Product } from "./../components/Product";

export const Home = ({ products, actions, message }) => {
  return (
    <>
      {message && (
        <div>
          {message}
        </div>
      )}
      <div className="products">
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} actions={actions} />
          );
        })}
      </div>
    </>
  );
};
