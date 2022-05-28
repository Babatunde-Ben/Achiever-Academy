import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/Student.css";

const Student = () => {
  let navigate = useNavigate();
  return (
    <section className="student-page">
      <Sidebar />

      <Outlet />
    </section>
  );
};

export default Student;
