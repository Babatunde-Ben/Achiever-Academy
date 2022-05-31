import React from "react";
import { Link } from "react-router-dom";

// css
import "../css/DashboardButton.css";

const DashboardButton = () => {
  return (
    <>
      <Link to="/student/dashboard">
        <button className="dashboard-button">Dashboard</button>
      </Link>
    </>
  );
};

export default DashboardButton;
