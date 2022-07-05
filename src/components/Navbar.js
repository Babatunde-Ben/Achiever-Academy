import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import DashboardButton from "./DashboardButton";

import "../css/Navbar.css";

const Navbar = ({ userState }) => {
  // const [userState, setUserState] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 10) {
        navbar?.classList.add("scroll");
      } else {
        navbar?.classList.remove("scroll");
      }
    });
  });
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
