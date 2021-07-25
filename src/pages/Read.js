import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <div key={ad.adId}>
              <h1>{ad.headline}</h1>
              <p>{ad.description}</p>
              <Link className="link" to={updateLinkData}>
                {" "}
                Update Ad
              </Link>
              <button
                onClick={() =>
                  setModal({ show: true, productId: product.id, adId: ad.adId })
                }
              >
                Delete ad
              </button>
            </div>
          );
        })
      )}
      {modal.show === true && (
        <div className="delete-modal">
          <p className="modal-text">Are you sure you wish to delete this ad?</p>
          <div className="modal-controls">
            <button
              className="modal-button button-no"
              onClick={() => setModal({ show: false, productId: "", adId: "" })}
            >
              No
            </button>
            <button
              className="modal-button form-button"
              onClick={(e) => doDelete(e, modal.productId, modal.adId)}
            >
              Yes
            </button>
          </div>
        </div>
      )}
      <Link className="link" to={createLinkData}>
        Create new add 📝
      </Link>
    </div>
  );
};
