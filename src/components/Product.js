import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product, actions }) => {
  const linkData = {
    pathname: `/read`,
    product: product,
    actions: actions,
  };

  const price = product.price.toFixed(2);

  return (
    <div className="product-card">
      <div className="card-section">
        <Link className="link product-name" to={linkData}>
          {product.productName}
        </Link>
        <p className="product-description">{product.productDescription}</p>
      </div>
      <div className="card-section">
        <img
          className="product-image"
          src={product.productImage}
          alt="product"
        ></img>
        <aside>€{price}</aside>
      </div>
    </div>
  );
};
