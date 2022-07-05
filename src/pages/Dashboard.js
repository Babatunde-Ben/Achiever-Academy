import React, { useState, useEffect } from "react";
import "../css/Dashboard.css";
import svg from "../images/dashboard.svg";

const Dashboard = () => {
  const [userState, setUserState] = useState("");
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("user"));
    setUserState(status);
  }, []);
  return (
    <section className="sidebar-article dashboard-section">
      <div className="article">
        <h2 className="title">Welcome {userState.displayName}</h2>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum amet
          error atque inventore exercitationem maxime quis repellendus dicta
          dolore voluptatibus?
        </p>
        <button
          className="tour-btn"
          onClick={() => alert("Service Unavailable")}
        >
          Take a quick tour
        </button>
      </div>
      <img src={svg} alt="" />
    </section>
  );
};

export default Dashboard;
