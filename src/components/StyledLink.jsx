import React from "react";
import { Link } from "react-router-dom";

const StyledLink = ({ children, ...rest }) => (
  <Link {...rest} className="nav-link">
    {children}
  </Link>
);

export default StyledLink;
