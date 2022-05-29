import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

const Login = () => {
  const [userState, setUserState] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("access"));
    console.log("status is", status);
    setUserState(status);
  }, []);

  useEffect(() => {
    localStorage.setItem("access", JSON.stringify(userState));
  }, [userState]);

  const handleGoggleAuth = () => {
    // alert("Signed In");
    setUserState(true);
    navigate("/student/dashboard");
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
