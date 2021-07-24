import React, { useState } from "react";

export const Create = (props) => {
  const { actions, id } = props.location;
  const [state, setState] = useState({ headline: "", description: "" });
  // const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  // const handleImageUpload = (e) => {
  //   let img = e.target.files[0];
  //   setImage(URL.createObjectURL(img))
  //   console.log(image)
  // }

  const doCreate = (e) => {
    e.preventDefault();
    actions.create(id, {headline: state.headline, description: state.description});
  };

  return (
    <>
      <h1>HI CREATE</h1>
      <form>
        {/* <label htmlFor="image">Select image</label>
        <input type="file" id="img" name="image" accept="image/*" onChange={handleImageUpload}></input> */}
        <input type="submit"></input>
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
