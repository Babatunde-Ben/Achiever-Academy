import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../css/LoginForm.css";
import { RiErrorWarningFill } from "react-icons/ri";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../components/firebase";

const MySwal = withReactContent(Swal);

const LoginForm = ({ updateState, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  let navigate = useNavigate();

  // Regex for email validation
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  useEffect(() => {
    setIsPassword(true);
    setIsEmail(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // sign-in
    if (isEmail && isPassword) {
      if (formType === "Register") {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            MySwal.fire({
              title: "Account created",
              icon: "success",
            });
            localStorage.setItem("user", JSON.stringify(userCredential.user));
            setEmail("");
            setPassword("");
            updateState();
            navigate("/student/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code.slice(5).replace(/-/g, " ");
            MySwal.fire({
              title: errorCode,
              icon: "warning",
            });
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            MySwal.fire({
              title: "Logged In!",
              icon: "success",
            });
            localStorage.setItem("user", JSON.stringify(userCredential.user));
            setEmail("");
            setPassword("");
            updateState();
            navigate("/student/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code.slice(5).replace(/-/g, " ");
            MySwal.fire({
              title: errorCode,
              icon: "warning",
            });
          });
      }
    }
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
            if (!e.target.value.match(pattern) && e.target.value.length !== 0) {
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
      <div className="cta">
        {formType !== "Register" && (
          <Link to="/register" className="create-account">
            Create account
          </Link>
        )}
        <button type="submit" onClick={handleSubmit}>
          {formType === "Register" ? "Sign up" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
