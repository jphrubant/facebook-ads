import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultImage from "./default-image.png"

export const Read = (props) => {
  const { actions, product } = props.location;
  const [modal, setModal] = useState({ show: false, productId: "", adId: "" });
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
    <div className="ads">
      <h1 className="title">{product.productName}</h1>
      <Link className="button primary" to={createLinkData}>
        Create add
      </Link>
      {product.ads.length === 0 ? (
        <p className="no-ads">This product does not have any adds yet 😔</p>
      ) : (
        product.ads.map((ad) => {
          const updateLinkData = {
            pathname: `/update`,
            product,
            actions,
            ad,
          };
          return (
            <div className="ad" key={ad.adId}>
              <img src={defaultImage} alt="placeholder"/>
              <h1>{ad.headline}</h1>
              <p>{ad.description}</p>
              <button
                 className="button secondary"
                onClick={() =>
                  setModal({ show: true, productId: product.id, adId: ad.adId })
                }
              >
                Delete ad
              </button>
              <Link  className="button primary" to={updateLinkData}>
                {" "}
                Update Ad
              </Link>
            </div>
          );
        })
      )}
      {modal.show === true && (
        <div className="delete-modal">
          <p className="modal-text">Are you sure you wish to delete this ad?</p>
          <div className="modal-controls">
            <button
              className="button secondary"
              onClick={() => setModal({ show: false, productId: "", adId: "" })}
            >
              No
            </button>
            <button
              className="button primary"
              onClick={(e) => doDelete(e, modal.productId, modal.adId)}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
