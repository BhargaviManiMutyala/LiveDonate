import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import DonationPage from "./DonationPage";
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <MainLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
}

function MainLayout({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/donate"];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />}

      <div className={`main-content ${showSidebar ? "with-sidebar" : ""}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/donate" element={<DonationPage />} />  {/* ✅ Always Accessible */}

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/donate" element={<DonationPage />} /> {/* ✅ Publicly accessible */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}

        </Routes>
      </div>
    </div>
  );
}

export default App;
