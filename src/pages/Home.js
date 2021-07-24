import React from "react";
import { Product } from "./../components/Product";

export const Home = ({ products, actions }) => {
  return (
    <>
      <div className="products">
        {products.map((product) => {
          const data = {
            pathname: `/read/${product.id}`,
            product: product,
            actions: actions,
          };
          return <Product product={product} data={data} />;
        })}
      </div>
    </>
  );
};
