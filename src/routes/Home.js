import React from "react";
import HeroSection from "../components/HeroSection";
import "../components/Home.css";
import video1 from "../videos/video1.mp4";
import "../components/Navbar.js";

function Home() {
  return (
    <>
     <div className="Navbar">
     <div className="home">
    <div className="content">
    <video className="video" src={video1} autoPlay loop muted />
    <h1>Hi</h1>
     </div>
     </div>
     </div>
    </>
  );
}

export default Home;
