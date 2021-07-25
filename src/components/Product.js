import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product,actions }) => {
  const linkData = {
    pathname: `/read/${product.id}`,
    product: product,
    actions: actions,
  };

  const price = product.price.toFixed(2);

  return (
    <div className="product-card">
      <Link className="link product-name" to={linkData}>{product.productName}</Link>
      <p className="product-description">{product.productDescription}</p>
      <img className="product-image" src={product.productImage} alt="product"></img>
      <aside className="product-price">€{price}</aside>
    </div>
  );
};
