import React from "react";
import { useState, useEffect } from "react";

import LoginButton from "./LoginButton";

import "../css/Navbar.css";

const Navbar = ({ userState }) => {
  // const [userState, setUserState] = useState(false);
  // useEffect(() => {
  //   setUserState(JSON.parse(localStorage.getItem("access")));
  // }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Achiever's Academy</h1>
      {!userState && <LoginButton />}
    </nav>
  );
};

export default Navbar;
