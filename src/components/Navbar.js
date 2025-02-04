import React from "react";
import "../assets/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="https://mail.google.com">Gmail</a>
        <a href="https://www.google.com/imghp">Images</a>
        <a href="https://www.google.com" className="apps-icon">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
            alt="Google Apps"
          />
        </a>
        <a href="https://accounts.google.com">Sign in</a>
      </div>
    </nav>
  );
}

export default Navbar;
