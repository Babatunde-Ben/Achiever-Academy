import React from "react";
import "../css/PageNotFound.css";
import { BiErrorAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  return (
    <section className="error-page-section">
      <BiErrorAlt className="error-icon" />
      <h3 className="title">Error 404!</h3>
      <p>
        Page not found{" "}
        <span
          onClick={() => {
            navigate("/");
          }}
          style={{
            color: "var(--color2",
            cursor: "pointer",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
        >
          Go Home
        </span>
      </p>
    </section>
  );
};

export default PageNotFound;
