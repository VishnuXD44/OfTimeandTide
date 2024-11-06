import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Of Time and Tide</h1>
      <p>Share your thoughts, connect with others, and find joy in life’s moments.</p>
      <div className="home-buttons">
        <button className="home-button" onClick={handleLogin}>Log In</button>
        <button className="home-button">About</button>
      </div>
    </div>
  );
};

export default Home;
