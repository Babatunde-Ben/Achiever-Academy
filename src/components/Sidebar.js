import React, { useState, useEffect, useContext } from "react";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase";
import { LoginContext } from "../Context/LoginContext";

const Sidebar = () => {
  const [navHandle, setnavHandle] = useState(true);
  const { setUserStatus } = useContext(LoginContext);
  const sidebar = document.querySelector(".sidebar-section ");
  useEffect(() => {
    if (navHandle) {
      sidebar?.classList.add("open");
    } else {
      sidebar?.classList.remove("open");
    }
  }, [navHandle, sidebar]);

  let navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");
        navigate("/");
        setUserStatus(localStorage.removeItem("user"));
      })
      .catch((err) => {
        // An error happened.
        console.log(err.message);
      });
  };

  const handleNavbar = () => {
    setnavHandle(!navHandle);
  };

  return (
    <section className="sidebar-section">
      <div className="pull-in-out" onClick={handleNavbar}></div>
      <li>
        <NavLink
          to="/student/dashboard"
          className="sidebar-link"
          onClick={() => setnavHandle(false)}
        >
          <MdOutlineSpaceDashboard className="sidebar-icons" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/student/courses"
          className="sidebar-link"
          onClick={() => setnavHandle(false)}
        >
          <GiBlackBook className="sidebar-icons" />
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/student/profile"
          className="sidebar-link"
          onClick={() => setnavHandle(false)}
        >
          <CgProfile className="sidebar-icons" />
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
