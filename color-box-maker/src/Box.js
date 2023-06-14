import React from "react";
import "./Box.css";

function Box({ idx, removeBox, width, height, boxBackgroundColor }) {
  return (
    <div>
      <div
        className="Box"
        key={idx}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${boxBackgroundColor}`,
        }}
      >
        <button type="button" onClick={() => removeBox(idx)}>
          Remove X
        </button>
      </div>
    </div>
  );
}

export default Box;
