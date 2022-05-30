import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

// firebase
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/firebase";

const Login = () => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   const status = JSON.parse(localStorage.getItem("access"));
  //   console.log("status is", status);
  //   setUserState(status);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("access", JSON.stringify(userState));
  // }, [userState]);

  const handleGoggleAuth = (e) => {
    // alert("Signed In");
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res.user);
        // console.log(res.user.email);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/student/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
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
