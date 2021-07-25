import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Read = (props) => {
  const { actions, product } = props.location;
  const [showModal, setShowModal] = useState(false);
  const createLinkData = {
    pathname: `/create`,
    product,
    actions,
  };

  const doDelete = (e, productId, adId) => {
    e.preventDefault();
    actions.delete(productId, adId);
    props.history.push("/");
  };

  return (
    <>
      <h1>{product.productName}</h1>
      {product.ads.length === 0 ? (
        <p>This product does not have any adds yet</p>
      ) : (
        product.ads.map((ad) => {
          const updateLinkData = {
            pathname: `/update`,
            product,
            actions,
            ad,
          };
          return (
            <div key={ad.adId}>
              <h1>{ad.headline}</h1>
              <p>{ad.description}</p>
              <Link to={updateLinkData}> Update Ad</Link>
              <button onClick={() => setShowModal(true)}>Delete ad</button>
              {showModal && (
                <div>
                  <p>Are you sure you wish to delete this ad?</p>
                  <button onClick={() => setShowModal(false)}>NO</button>
                  <button onClick={(e) => doDelete(e, product.id, ad.adId)}>
                    YES
                  </button>
                </div>
              )}
            </div>
          );
        })
      )}
      <Link to={createLinkData}>Create new add</Link>
    </>
  );
};
