import React from "react";
import "../assets/CustomiseChrome.css";

function CustomizeChrome({ toggleDarkMode, isDarkMode }) {
  return (
    <div className="customize-chrome-container" onClick={toggleDarkMode}>
      <button className="customize-chrome-button">
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default CustomizeChrome;
