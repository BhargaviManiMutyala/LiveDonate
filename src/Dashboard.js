import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./dashboard.css";
import "./Sidebar.js";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "Prashant Shukla", referralCode: "pra7432", totalDonations: 3000 });
  //const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios.get("/api/user/dashboard")
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  const copyReferralLink = () => {
    const referralLink = `https://bhargavimanimutyala.github.io/LiveDonate/#/donate?ref=pra7432`;
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };
  

  const shareOnWhatsApp = () => {
    const referralLink = `https://bhargavimanimutyala.github.io/LiveDonate/#/donate?ref=pra7432`;
    const message = `Support our cause! Donate using my referral link: ${referralLink}`;
    window.open(`https://api.whatsapp.com/send?text=“Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link and make a difference!”${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div id="dashboard">
      

      {/* Main Content */}
      <div id="main-container">
        <div id="background-container">
          <h1 id="welcome-message">Hello {user.name},</h1>
          <p id="motivation-text">
            Initial push is the toughest! Go through the learning modules or reach out to your fundraising manager to level up.
          </p>
        </div>

        {/* Donation Stats Section */}
        <div id="donation-stats">
          <h3>Goal Achieved : 10</h3>
          <p id="total-donations">Total Donations: ${user.totalDonations}</p>
          <p id="referral-code">Your Referral Code: <strong>{user.referralCode}</strong></p>
          <button id="copy-link-btn" onClick={copyReferralLink}>Copy Donation Link</button>
          <button id="whatsapp-share-btn" onClick={shareOnWhatsApp}>Share on WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
