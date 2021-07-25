import React, { useState, useEffect } from "react";

export const Update = (props) => {
  const { actions, product, ad } = props.location;
  const [state, setState] = useState({ headline: "", description: "" });

  useEffect(() => {
    setState({ adId: ad.adId, headline: ad.headline, description: ad.description });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const doUpdate = (e) => {
    e.preventDefault();
    actions.update(product, state);
    props.history.push('/');
  };

  return (
    <>
      <h1>HI Update</h1>
      <form>
        <label htmlFor="headline">Enter headline</label>
        <input
          id="headline"
          name="headline"
          value={state.headline}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Enter description</label>
        <textarea
          id="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        ></textarea>
        <button onClick={(e) => doUpdate(e)}>Update Ad</button>
      </form>
    </>
  );
};
