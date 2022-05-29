import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/Student.css";

const Student = () => {
  return (
    <section className="student-page">
      <Sidebar />

      <Outlet />
    </section>
  );
};

export default Student;
