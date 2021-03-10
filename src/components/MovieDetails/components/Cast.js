import React from "react";

import "../styles/Cast.css";

function Cast() {
  const n = 9;

  return (
    <div className="cast">
      {[...Array(n)].map((e, i) => (
        <div className="cast-item" key={i}></div>
      ))}
    </div>
  );
}

export default Cast;
