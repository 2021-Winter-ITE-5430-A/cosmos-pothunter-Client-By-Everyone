import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="footer__legal">
        <div className="container">
          <div className="footer__legal--copyrights">
            <span>Copyright © 2021 Cosmopothunter.com. All rights reserved.</span>
          </div>
          <div className="footer__legal--links">
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/privacy">Privacy</a>
            <a href="/security-gdpr"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
