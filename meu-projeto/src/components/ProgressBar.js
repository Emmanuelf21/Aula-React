
import React from "react";
import "./ProgressBar.css";

function ProgressBar({ valor }) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${valor}%` }}>
        {valor}%
      </div>
    </div>
  );
}

export default ProgressBar;

