import React from "react";
import "../About/AboutPage.css";
import "./ContactPage.css";
import "./ContactRes.css";

const ContactPage = () => {
  return (
    <>
    <section className="ContactPage">
    <div className="ContactPage-heading">
              <h2>Contact <span>Me.</span>
              </h2>
            </div>
      <form action="https://formspree.io/f/xayvlgnr" method="POST">
        <div className="contact--main about--main">
          <div
            className="contactBox about--box"
            
          >
            <div className="contactFlex">
              <div className="Contact--flexLeft">
                <img src="./images/Contact-3.svg" alt="Navbar-logo" />
              </div>
              <div className="contact--flexRight">
                <h2>Get In Touch...👋🏻</h2>
                <ul>
                  <div className="nameFlex">
                    <li>
                      <i className="bx bxs-user"></i>
                      <input
                        type="text"  
                        required
                        name="Name"
                        autoComplete="off"
                        placeholder="Your Name"
                      />
                    </li>
                    <li>
                      <i className="bx bxs-user-pin"></i>
                      <input
                        type="text" 
                        required
                        name="LastName"
                        autoComplete="off"
                        placeholder="Your Last Name"
                      />
                    </li>
                  </div>
                  <div className="emailNumberFlex nameFlex">
                    <li>
                      <i className="bx bxs-envelope"></i>
                      <input
                        type="email"
                        required
                        name="Email"
                        autoComplete="off"
                        placeholder="Your email"
                      />
                    </li>
                    <li>
                      <i className="bx bx-mobile"></i>
                      <input
                        type="number"
                        required
                        name="Number"
                        autoComplete="off"
                        placeholder="Your Phone Name"
                      />
                    </li>
                  </div>
                  <div className="messageFlex">
                    <li>
                      <i className="bx bxs-home"></i>
                      <textarea
                        name="Addres"
                        required
                        cols="30"
                        rows="2"
                        autoComplete="off"
                        placeholder="Address..."
                      ></textarea>
                    </li>
                    <li>
                      <i className="bx bxs-chat"></i>
                      <textarea
                        name="Message"
                        cols="30"
                        required
                        rows="5"
                        autoComplete="off"
                        placeholder="Message..."
                      ></textarea>
                    </li>
                  </div>
                  <div className="submitBtn">
                    <button type="submit">
                      Submit <i className="bx bx-paper-plane"></i>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
      </section>
    </>
  );
};

export default ContactPage;
