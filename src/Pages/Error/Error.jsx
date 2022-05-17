import React from "react";
import "./Error.css";
import "./ErrorRes.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
    <section className="ErrorSec">
      <div className="Error_main">
        <div className="Error_box">
        <div className="Error_img">
        <img src="/images/video.gif" alt="404 Error Images" />

        </div>
         
        
        <h2>OOPS!</h2>
        <h3>404 - Page Not Found</h3>
        <p>The page you requested could not be found...🥺🥺 </p>
        <button>
          <NavLink className="ErrorBtnStyle" to="/">
            GO HOME
          </NavLink>
        </button>
        </div>
      </div>
      </section>
    </>
  );
};

export default Error;
