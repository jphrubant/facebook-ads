import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({title}) => {
  return (
    <div className="product-card">
      <h1>{title}</h1>
      <Link to="/">Home</Link>
    </div>
  );
};