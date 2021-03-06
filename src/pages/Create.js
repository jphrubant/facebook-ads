import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const Create = (props) => {
  const { actions, product } = props.location;
  const [state, setState] = useState({ headline: "", description: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const doCreate = (e) => {
    e.preventDefault();
    const adId = uuid();
    actions.create(product.id, {
      adId: adId,
      headline: state.headline,
      description: state.description,
    });
    props.history.push("/");
  };

  return (
    <div className="ad-form">
      <h1 className="title">Create a new ad</h1>
      <form onSubmit={(e) => doCreate(e)} className="form">
        <fieldset>
          <label htmlFor="headline">Enter headline:</label>
          <input
            id="headline"
            name="headline"
            value={state.headline}
            onChange={handleChange}
            type="text"
            required
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="description">Enter description:</label>
          <textarea
            id="description"
            name="description"
            value={state.descripion}
            onChange={handleChange}
            type="text"
            required
          ></textarea>
        </fieldset>
        <button className="button primary" type="submit">
          Create Ad
        </button>
      </form>
    </div>
  );
};
