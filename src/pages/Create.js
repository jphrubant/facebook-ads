import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

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
    actions.create(product.id, {adId: adId, headline: state.headline, description: state.description});
    props.history.push('/');
  };

  return (
    <>
      <h1>HI CREATE</h1>
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
          value={state.descripion}
          onChange={handleChange}
        ></textarea>
        <button onClick={(e) => doCreate(e)}>Save Ad</button>
      </form>
    </>
  );
};
