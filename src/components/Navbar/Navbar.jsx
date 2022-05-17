import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarRes.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuShow, setMenushow] = useState(false);
  return (
    <>
      <section>
        <div className="navbar-sec">
          <div
            className="navbar-con"
            // data-aos="fade-down"
            // data-aos-offset="500"
            // data-aos-delay="100"
            // data-aos-duration="1000"
          >
            <div className="nav-logo">
              <NavLink to="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/avatar-3.svg"}
                  alt="Navbar-logo"
                />
              </NavLink>
              <span>
                <NavLink to="/" className="logoheading">
                  CodeHub.
                </NavLink>
              </span>
            </div>
            <ul className={menuShow ? "nav-Tab" : "nav-Tab nav-Tab-menu"}>
              <NavLink className="linkStyle" to="/">
                <li>
                  <span>Home</span>
                </li>
              </NavLink>
              <NavLink className="linkStyle" to="/about">
                <li>About</li>
              </NavLink>
              <NavLink className="linkStyle" to="/project">
                <li>Project</li>
              </NavLink>
              <NavLink className="linkStyle" to="/experience">
                <li>Experience</li>
              </NavLink>
              <NavLink className="linkStyle" to="/contact">
               <li>Contact Me</li>
            </NavLink>
            </ul>
            
            <NavLink  className="Contact-Me" to="/Pricing">
            Plan's
              </NavLink>
            <div className="menu-btn" onClick={() => setMenushow(!menuShow)}>
            {menuShow ?<i className="bx bx-menu"></i> : <i className="bx bx-x"></i> }
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
