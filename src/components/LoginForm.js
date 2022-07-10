import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginForm.css";
import { RiErrorWarningFill } from "react-icons/ri";
// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../components/firebase";

const LoginForm = ({ updateState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  // const [isValid, setIsValid] = useState(true);
  let navigate = useNavigate();

  // Regex for email validation
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  useEffect(() => {
    setIsPassword(true);
    setIsEmail(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email.length === 0 || password.length === 0) {
    //   setIsValid(!isValid);
    // } else {
    //   setIsValid(true);
    // }
    // sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        setEmail("");
        setPassword("");
        updateState();
        navigate("/student/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
      });
  };
  return (
    <form className="login-form">
      <label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!e.target.value.match(pattern) && e.target.value.length != 0) {
              setIsEmail(false);
            } else {
              setIsEmail(true);
            }
          }}
          className="form-input"
        />
        {!isEmail && <RiErrorWarningFill className="warning" />}
      </label>

      <label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value.length >= 1 && e.target.value.length < 8) {
              setIsPassword(false);
            } else {
              setIsPassword(true);
            }
          }}
          className="form-input"
        />
        {!isPassword && <RiErrorWarningFill className="warning" />}
      </label>
      {/* <p className="err-message">{err}</p> */}
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
