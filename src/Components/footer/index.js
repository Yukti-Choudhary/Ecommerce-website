import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__nav">
        <ul>
          <li>Instagram </li>
          <li>Pinterest</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="footer__copywrite">
        <p> @copyright {year} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
