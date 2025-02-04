import React from "react";
import "../assets/MainContent.css";
import darkLogo from "../assets/DarkMode.png"; // dark mode logo

function MainContent({ buttons, isDarkMode }) {
  return (
    <div className="main-content">
      {/* Switch logo based on isDarkMode */}
      <img
        src={
          isDarkMode
            ? darkLogo
            : "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        }
        alt="Google Logo"
        className="google-logo"
      />
      <input
        type="text"
        className="search-bar"
        placeholder="Search Google or type a URL"
      />
      <div className="buttons">
        <button>{buttons.search}</button>
        <button>{buttons.lucky}</button>
      </div>
    </div>
  );
}

export default MainContent;
