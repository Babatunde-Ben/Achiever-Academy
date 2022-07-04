import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginForm.css";

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../components/firebase";

const LoginForm = ({ updateState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setErr("Enter valid details");
    } else {
      setErr("");
    }
    // sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
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
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="form-input"
      />
      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="form-input"
      />
      <p className="err-message">{err}</p>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
