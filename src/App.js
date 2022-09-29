import React, { useState } from "react";
import "./styles.css";
import Callback from "./callback";

// Parent
export default function App() {
  const [UiColor, setUiColor] = useState(null);

  // our callback function
  const getColor = (color) => {
    setUiColor(color);
  };

  return (
    <div className="app">
      <div
        className="color-container"
        style={{ background: `${UiColor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
