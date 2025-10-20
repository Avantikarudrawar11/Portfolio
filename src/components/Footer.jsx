import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} Avantika Rudrawar. All rights reserved.</p>
        <img src="./logo.jpg" alt="My Portfolio Logo" className="logo" />
      </div>
    </footer>
  );
}

export default Footer;
