import React from "react";
import "./profile.css";

export default function ProfileInformation() {
  return (
    <div className="information">
      <div className="Heads1">
        Bio:
      </div>
      <div className="bioInfo">
        "Hard work beats talent when talent doesn't work hard." - Tim Notke.
      </div>
      <div className="Heads2">
        Sports:
      </div>
      <div className="SportsInfo">
        <div className="rectangle1">Soccer</div>
        <div className="rectangle2">Baseball</div>
      </div>
      <div className="Heads3">
        Ranking:
        <div className="cup-icon">
          <img src="https://i.imgur.com/Np1YNOk.png" alt="Cup" />
          <div className="number">48</div>
        </div>
      </div>
    </div>
  )
}
