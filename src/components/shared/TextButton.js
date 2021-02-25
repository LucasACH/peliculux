import React from "react";
import "./styles/TextButton.css";

function TextButton({ input, handleClick }) {
  return (
    <button className="text-button" onClick={handleClick}>
      {input}
    </button>
  );
}

export default TextButton;
