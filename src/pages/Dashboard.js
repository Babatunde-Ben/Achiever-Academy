import React from "react";
import "../css/Dashboard.css";
import svg from "../images/dashboard.svg";

const Dashboard = () => {
  return (
    <section className="sidebar-article dashboard-section">
      <div className="article">
        <h2 className="title">Welcome User</h2>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum amet
          error atque inventore exercitationem maxime quis repellendus dicta
          dolore voluptatibus?
        </p>
        <button className="tour-btn">Take a quick tour</button>
      </div>
      <img src={svg} alt="" />
    </section>
  );
};

export default Dashboard;
