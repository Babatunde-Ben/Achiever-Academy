import React from "react";
import LoginButton from "./LoginButton";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Achiever's Academy</h1>
      <LoginButton />
    </nav>
  );
};

export default Navbar;
