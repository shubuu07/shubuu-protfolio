import React from "react";
import "./Footer.css";
import "./ResposonsiveF.css";

const Footer = () => {
  return (
    <>
    
      <footer>
        <div className="footer--main">
          <div className="footer-box" 
    >
            <div className="footer-Codevo">
              <div className="footerflexhead">
                <div className="footerImg">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/avatar-1.svg"}
                    alt="Navbar-logo"
                  />
                </div>

                <div className="footerhading1">CodeHub.</div>
              </div>
              <p>
                wpcodevo provides free HTML, CSS and Javascript tutorials along
                with practical examples.
              </p>
              <h3>Get in Touch..🧑🏻‍💻</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/shubham.handargule.73/" target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/__shubuu07._/?hl=en" target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/shubuu_07" target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
              </ul>
              <div className="Email-Send">
                <input type="text" name="" id="" placeholder="Email" />
                <button className="sendMe">
                  Send <i className="bx bx-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="Product">
              <h2>Product</h2>
              <ul>
                <li>
                  <a href="/#">Download </a>
                </li>
                <li>
                  <a href="/#">Pricing </a>
                </li>
                <li>
                  <a href="/#">Locations </a>
                </li>
                <li>
                  <a href="/#">Server </a>
                </li>
                <li>
                  <a href="/#">Countries </a>
                </li>
                <li>
                  <a href="/#">Blog </a>
                </li>
              </ul>
            </div>
            <div className="Quick--Links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Testimonial </a>
                </li>
                <li>
                  <a href="/#">Portfolio </a>
                </li>
                <li>
                  <a href="/#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/#">Privacy Policy </a>
                </li>
              </ul>
            </div>
            <div className="Services">
              <h2>Services</h2>
              <ul>
                <li>
                  <a href="/#">Website </a>
                </li>
                <li>
                  <a href="/#">Mobile App </a>
                </li>
                <li>
                  <a href="/#">Website Design </a>
                </li>
                <li>
                  <a href="/#">Graphic Design </a>
                </li>
                <li>
                  <a href="/#">IOS App </a>
                </li>
              </ul>
            </div>
          </div>
          <h3 className="Copyright">Copyright © Shubu_07 ☕ 2021-22. All Rights Reserved. 😍 😎</h3>
          <hr />
        </div>
      </footer>
    </>
  );
};

export default Footer;
