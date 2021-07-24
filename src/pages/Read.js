import React from "react";
import { Link } from "react-router-dom";

export const Read = (props) => {
  const { actions, product } = props.location;

  const linkData = {
    pathname: `/create`,
    id: product.id,
    actions: actions,
  }

  return (
    <>
      <h1>{product.productName}</h1>
      {product.ads.length === 0 ? (
        <p>This product does not have any adds yet</p>
      ) : (
        product.ads.map((ad) => {
          return <p>{ad}</p>;
        })
      )}
      <Link to={linkData}>Create new add</Link>
    </>
  );
};
