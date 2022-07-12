import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import DashboardButton from "./DashboardButton";

import "../css/Navbar.css";
import { LoginContext } from "../Context/LoginContext";

const Navbar = () => {
  const { userStatus } = useContext(LoginContext);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
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

      {userStatus ? <DashboardButton /> : <LoginButton />}
    </nav>
  );
};

export default Navbar;
