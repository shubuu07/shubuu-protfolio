import React from "react";
import "./Home.css";
import "./ResposonsiveH.css";
import ResumeDown from "../Resume/Shubham Resume.pdf"
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Home = () => {
 
  return (
    <>
      <section className="HomeSec">
        <div className="home-main">
          <div className="home-container">
           
            <div
              className="home-image "
            >
              <img
                src={process.env.PUBLIC_URL + "/images/work.svg"}
                alt="Navbar-logo"
              />
            </div>
            <div
              className="home-body"
            >
              <h1>
                Hye!🙋🏼 I’m <span>Shubu.</span>
                <br />
              </h1>
              <div className="heading2-style">
                I Am,
                <span style={{ color: "#AC005F" }}>
                  {
                    <Typewriter
                      options={{
                        strings: [
                          "Creative Designer",
                          " Web Developer.",
                          " Android Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  }
                </span>
              </div>

              <p>
                <span>CodeHub</span> provides free HTML, CSS and Javascript
                tutorials along with practical examples. Improve your skills
                with our coding-based challenges including quizzes,
                multiple-choice questions. Stay Updated with web development
                tricks, tips, resources and much more.
              </p>
              <div className="btn-flex">
              <NavLink to="/contact" className="hire-btn">Hire Me !</NavLink>
              <button className="down-btn"><a  href={ResumeDown} download="Shubham Resume" target='_blank' rel="noreferrer">Download CV</a></button>
              
              </div>
              
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default Home;
