import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "./logo.jpg"; // Ensure correct path

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div id="sidebar">
      {/* Logo at the top left */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h2>Menu</h2>
      <div className="menu-buttons">
        <button className="menu-btn" id="dashboard-menu" onClick={() => navigate("/")}>
          Dashboard
        </button>
        <button className="menu-btn" id="transactions-menu" onClick={() => navigate("/transactions")}>
          Transactions
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
