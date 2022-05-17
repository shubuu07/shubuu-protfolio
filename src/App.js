import React from "react";
import '../src/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homes from './Pages/Homes/HomePage'
import AboutPage from './Pages/About/AboutPage'
import Project from './Pages/Project/ProjectPage'
import ContactMe from './Pages/Contact/ContactPage'
import ExperiencePage from './Pages/Experience/ExperiencePage'
import Footer from './components/Footer/Footer'
import PricingPage from "./Pages/Pricing/PricingPage";
import Error from "./Pages/Error/Error";

const App = () => {
  const scollTop = () => {
    window.scroll({
      top: "0%",
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Homes/>}/>
          <Route exact path="/about" element={ <AboutPage />}/>
          <Route exact path="/project" element={ <Project />}/>
          <Route exact path="/experience" element={ <ExperiencePage />}/>
          <Route exact path="/Pricing" element={ <PricingPage />}/>
          <Route exact path="/contact" element={ <ContactMe />}/>
          <Route path="*" element={ <Error />}/>
          </Routes>
          <div className="scroll">
          <div className="scrollToTop">
            <i className="bx bxs-up-arrow-alt" onClick={scollTop}></i>
          </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;
