import React from "react";
import HeroSection from "../components/HeroSection";
import "../components/Home.css";
import video1 from "../videos/video1.mp4";

function Home() {
  return (
    <>
    <div className="home">
    <video src={video1} autoPlay loop muted />
    <h1>Hi</h1>
     </div>
     <div className="index">
     </div>
    </>
  );
}

export default Home;
