import React from "react";
import Logo from "./Logo.jsx";

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
