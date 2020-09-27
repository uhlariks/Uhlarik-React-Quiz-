import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="Logo">
        🤓🤔🧐
      </span>
      <nav className="header__nav">
        <Link to="/">Home Page</Link> | <Link to="/play">Play</Link> |{" "}
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  );
}

export default Header;
