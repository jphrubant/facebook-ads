import React from "react";
import { Link } from "react-router-dom";

export const Read = (props) => {
  const { actions, product } = props.location;

  const linkData = {
    pathname: `/create`,
    product,
    actions,
  };

  const doDelete = (e, productId, adId) => {
    e.preventDefault();
    actions.delete(productId, adId);
    props.history.push('/');
  }

  return (
    <>
      <h1>{product.productName}</h1>
      {product.ads.length === 0 ? (
        <p>This product does not have any adds yet</p>
      ) : (
        product.ads.map((ad) => {
          return (
            <div key={ad.adId}>
              <h1>{ad.headline}</h1>
              <p>{ad.description}</p>
              <button onClick={(e) => doDelete(e, product.id, ad.adId)}>Delete ad</button>
            </div>
          );
        })
      )}
      <Link to={linkData}>Create new add</Link>
    </>
  );
};
