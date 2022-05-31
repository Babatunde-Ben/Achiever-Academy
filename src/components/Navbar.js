import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import DashboardButton from "./DashboardButton";

import "../css/Navbar.css";

const Navbar = ({ userState }) => {
  // const [userState, setUserState] = useState(false);
  // useEffect(() => {
  //   setUserState(JSON.parse(localStorage.getItem("access")));
  // }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">Achiever's Academy</h1>
      </Link>

      {userState ? <DashboardButton /> : <LoginButton />}
    </nav>
  );
};

export default Navbar;
