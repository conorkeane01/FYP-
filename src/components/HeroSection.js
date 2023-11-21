import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="HeroSection-container">
      <video src="/videos/video (720p).mp4" autoPlay loop muted />
      <h1>Good Evening</h1>
      <p>How are you today ?</p>
      <div className="HeroSection-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Testing <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
