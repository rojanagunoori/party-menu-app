import React from "react";
import "./BottomBar.css";

function BottomBar({ totalSelected, onContinue }) {
  return (
    <div className="bottom-bar">
      <p>Total Dish Selected: {totalSelected}</p>
      <button className="continue-btn" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}

export default BottomBar;
