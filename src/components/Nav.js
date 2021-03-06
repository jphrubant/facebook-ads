import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ title }) => {
  return (
    <div className="nav">
      <h1 className="nav-title">{title}</h1>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
};
