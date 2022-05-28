import React from "react";
import { Link } from "react-router-dom";

// css
import "../css/LoginButton.css";

const LoginButton = () => {
  return (
    <>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </>
  );
};

export default LoginButton;
