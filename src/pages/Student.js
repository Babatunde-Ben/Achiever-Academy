import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/Student.css";

const Student = ({ updateState }) => {
  return (
    <section className="student-page">
      <Sidebar updateState={updateState} />

      <Outlet />
    </section>
  );
};

export default Student;
