import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product, data }) => {
  return (
    <div key={product.productName} className="product-card">
      <Link to={data}>{product.productName}</Link>
      <p>{product.productDescription}</p>
      <img src={product.productImage} alt="product"></img>
      <aside>{product.price}</aside>
    </div>
  );
};
