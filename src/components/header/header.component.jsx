import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg"; // special React import syntax
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/sign">
        Sign In
      </Link>
    </div>
  </div>
);

export default Header;
