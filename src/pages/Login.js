import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

// firebase
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/firebase";
import { LoginContext } from "../Context/LoginContext";

const Login = ({ updateState }) => {
  let navigate = useNavigate();

  const { setUserStatus } = useContext(LoginContext);

  const handleGoggleAuth = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        setUserStatus(localStorage.getItem("user", JSON.stringify(res.user)));
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
        <p>Make sure your account is secure</p>
        <LoginForm updateState={updateState} formType={"Login"} />
        <p>Or</p>
        <button className="sign-in-auth" onClick={handleGoggleAuth}>
          Login with Google <FcGoogle className="google-icon" />
        </button>
      </div>
    </section>
  );
};

export default Login;
