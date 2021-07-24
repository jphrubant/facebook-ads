import React from "react";

export const Read = (props) => {
  const {actions, product} = props.location
  
  const doCreate = (ad) => {
    actions.create(product.id, ad)
  }

  return (
    <>
      <h1>{product.productName}</h1> 
      {product.ads.map(ad => {
        return (
          <p>{ad}</p>
        )
      })}
      <button onClick={() => doCreate("helloooooo")}>Create new ad</button>
    </>
  );
};
