import React from "react";
import "./AboutPage.css";
import "./AboutRes.css";

const AboutPage = () => {
  return (
    <>
    <section className="AboutSec">
      <div className="about--main">
        <div className="about--box" data-aos="fade-down"
     >
          <div className="AboutImg">
            <img
              src={"/images/avatar-2.svg"}
              alt="Navbar-logo"
            />
          </div>
          <h2>About Me.</h2>
          <p className="about-para">
            HELLO 🙋🏼 , I'M <span>Shubham Handergule</span>, I'M web developer <br /> I have rich
            experience in web site designer.
          </p>
          <div className="aboutFlexbox">
            <div className="aboutLeft">
              <h3>Me 🧑🏻‍💻</h3>
              <ul>
                <li><span>Name</span> : Shubham Handergule.</li>
                <li> <span>Age</span> : 21+</li>
                <li>
                  <a href="mailto:shubhamhandergule77@gmail.com">
                  <span>Email</span> : shubhamhandergule77@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:91+7796500494"><span>Phone</span> : 7796500494</a>{" "}
                </li>
                <li><span>Profession</span> : Web Developer,designer</li>
              </ul>
            </div>
            
            <div className="aboutRight">
              <h3>Addres📍</h3>
              <ul>
                <li><span>Home</span> 🏠</li>
                <li><p>
                  Room No.204,  Balaji Kirana Store, Kamathghar, Bhiwandi - 421302, India
                </p></li>
                <li><span>Office</span> 🚘</li>
                <li><p>
                  Model Town Rd, Pritm Nagar, Model Town, Thane - 421305, India
                </p></li>
              </ul>
            </div>
          </div>
          <div className="socialMedia">
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
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutPage;
