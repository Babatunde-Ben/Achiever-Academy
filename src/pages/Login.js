import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

const Login = () => {
  const handleGoggleAuth = () => {
    alert("Signed In");
  };
  return (
    <section className="login-section">
      <img src={StudentLogin} alt="" />
      <div>
        <h2 className="title">Student Login</h2>
        <p>Make sure you account is secure</p>
        <button className="sign-in-auth" onClick={handleGoggleAuth}>
          Login with Google <FcGoogle />
        </button>
      </div>
    </section>
  );
};

export default Login;
