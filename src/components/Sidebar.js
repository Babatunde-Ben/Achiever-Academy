import React from "react";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <li>
        <NavLink to="/student/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/student/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/student/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/">
          <button className="log-out-btn">Log Out</button>
        </NavLink>
      </li>
    </section>
  );
};

export default Sidebar;