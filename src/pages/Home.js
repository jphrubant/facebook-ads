import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ products, actions }) => {
  return (
    <>
      <div className="products">
        {products.map((product) => {
          const data = {
            pathname:  `/read/${product.id}`,
            product: product,
            actions: actions
          }
          return (
            <div key={product.productName} className="product-card">
              <Link to={data}>{product.productName}</Link>
              <p>{product.productDescription}</p>
              <img src={product.productImage} alt="product"></img>
              <aside>{product.price}</aside>
            </div>
          );
        })}
      </div>
    </>
  );
};
