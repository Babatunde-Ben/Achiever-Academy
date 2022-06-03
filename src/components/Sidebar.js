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
        <MdOutlineSpaceDashboard className="sidebar-icons" />
        <NavLink to="/student/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
      </li>
      <li>
        <GiBlackBook className="sidebar-icons" />
        <NavLink to="/student/courses" className="sidebar-link">
          Courses
        </NavLink>
      </li>
      <li>
        <CgProfile className="sidebar-icons" />
        <NavLink to="/student/profile" className="sidebar-link">
          Profile
        </NavLink>
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
