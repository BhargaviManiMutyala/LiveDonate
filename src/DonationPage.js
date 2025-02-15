import React, { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import "./donation.css";

const DonationPage = () => {
  //const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    referralCode: "",
    amount: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.hash.split('?')[1]); // Extract query params from hash
    const referralCode = searchParams.get("ref") || ""; 
    console.log("Referral Code:", referralCode);
    setFormData((prevData) => ({ ...prevData, referralCode }));
  }, []);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Donation Successful! Thank you for your support.");
        window.location.href = "#/thank-you"; // ✅ Fix for GitHub Pages
      } else {
        alert("Error processing donation. Please try again.");
      }
    } catch (error) {
      console.error("Donation Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div id="donation-page">
      <form id="donation-form" onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          value={formData.referralCode}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="amount"
          placeholder="Donation Amount"
          value={formData.amount}
          onChange={handleChange}
          className="input-field"
          required
        />
        <button type="submit" id="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default DonationPage;
