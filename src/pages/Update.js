import React, { useState, useEffect } from "react";

export const Update = (props) => {
  const { actions, product, ad } = props.location;
  const [state, setState] = useState({ headline: "", description: "" });

  useEffect(() => {
    setState({
      adId: ad.adId,
      headline: ad.headline,
      description: ad.description,
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const doUpdate = (e) => {
    e.preventDefault();
    actions.update(product, state);
    props.history.push("/");
  };

  return (
    <div className="ad-form">
      <h1 className="title">Update ad</h1>
      <form className="form">
      <fieldset>
        <label htmlFor="headline">Update headline:</label>
        <input
          id="headline"
          name="headline"
          value={state.headline}
          onChange={handleChange}
        ></input>
        </fieldset>
        <fieldset>
        <label htmlFor="description">Update description:</label>
        <textarea
          id="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        ></textarea>
        </fieldset>
        <button className="button primary" onClick={(e) => doUpdate(e)}>
          Update Ad
        </button>
      </form>
    </div>
  );
};
