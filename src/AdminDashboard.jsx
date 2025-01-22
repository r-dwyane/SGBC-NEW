import React from "react";
import { NavLink, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import OrderDashboard from "./OrderDashboard";
import ContentManagement from "./ContentManagement";
import AnalyticsReporting from "./AnalyticsReporting";
import "./AD.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="sidenav-container">
      <nav className="sidenav">
        <h2>Hello, Admin!</h2>
        <h3 className="sidenav-title">Main Menu</h3>
        <ul className="sidenav-links">
          <li>
            <NavLink
              to="/dashboard/order-dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src="/icons/control.svg" alt="Order Icon" className="sidenav-icon" />
              Order Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/content-management"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src="/icons/content.svg" alt="Content Icon" className="sidenav-icon" />
              Content Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/analytics-reporting"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src="/icons/analytics.svg" alt="Analytics Icon" className="sidenav-icon" />
              Analytics & Reporting
            </NavLink>
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogout}>
            <img src="/icons/logout.svg" alt="Log out Icon" className="icon" />
              Log Out
            </button>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="order-dashboard" element={<OrderDashboard />} />
          <Route path="content-management" element={<ContentManagement />} />
          <Route path="analytics-reporting" element={<AnalyticsReporting />} />
          <Route path="*" element={<Navigate to="order-dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
