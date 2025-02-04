import React from "react";
import "../assets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="https://about.google/">About</a>
        <a href="https://ads.google.com/">Advertising</a>
        <a href="https://www.google.com/services/">Business</a>
      </div>
      <div className="footer-right">
        <a href="https://policies.google.com/privacy">Privacy</a>
        <a href="https://policies.google.com/terms">Terms</a>
        <a href="https://www.google.com">Google.com</a> {/* Google.com */}
      </div>
    </footer>
  );
}

export default Footer;
