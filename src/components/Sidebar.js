import React from "react";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <li>
        <NavLink to="/student/dashboard">Dashboard</NavLink>
        <MdOutlineSpaceDashboard className="sidebar-icons" />
      </li>
      <li>
        <NavLink to="/student/courses">Courses</NavLink>
        <GiBlackBook className="sidebar-icons" />
      </li>
      <li>
        <NavLink to="/student/profile">Profile</NavLink>
        <CgProfile className="sidebar-icons" />
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
