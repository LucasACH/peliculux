import React from "react";
import "./styles/PrimaryButton.css";

function PrimaryButton({ input, handleClick }) {
  return (
    <button className="primary-button" onClick={handleClick}>
      {input}
    </button>
  );
}

export default PrimaryButton;
