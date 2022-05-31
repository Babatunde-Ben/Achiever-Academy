import React from "react";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase";

const Sidebar = ({ updateState }) => {
  let navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");
        navigate("/");
        updateState();
      })
      .catch((err) => {
        // An error happened.
        console.log(err.message);
      });
  };
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
          <button className="log-out-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </NavLink>
      </li>
    </section>
  );
};

export default Sidebar;
