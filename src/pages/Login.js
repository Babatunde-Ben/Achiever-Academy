import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

const Login = () => {
  let navigate = useNavigate();
  const handleGoggleAuth = () => {
    alert("Signed In");
    navigate("/student");
  };

  return (
    <section className="login-section">
      <img src={StudentLogin} alt="" />
      <div>
        <h2 className="title">Student Login</h2>
        <p>Make sure you account is secure</p>
        <button className="sign-in-auth" onClick={handleGoggleAuth}>
          Login with Google <FcGoogle className="google-icon" />
        </button>
      </div>
    </section>
  );
};

export default Login;
