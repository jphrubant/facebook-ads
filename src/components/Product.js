import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product, actions}) => {
  const linkData = {
    pathname: `/read/${product.id}`,
    product: product,
    actions: actions,
  };
  return (
    <div className="product-card">
      <Link to={linkData}>{product.productName}</Link>
      <p>{product.productDescription}</p>
      <img src={product.productImage} alt="product"></img>
      <aside>{product.price}</aside>
    </div>
  );
};
