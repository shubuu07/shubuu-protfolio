import React, { useState } from "react";
import "./ProjectPage.css";
import "./ProjectRes.css";
import ProjectApi from "../../Api/ProjectApi";
import ProjectComp from "./ProjectComp";


      // =============== filter method imp =================

const ProjectPage = () => {
  const [proData, setproData] = useState(ProjectApi);      // useState

  const filterItem = (category) => {
    const newData = ProjectApi.filter((curElem) => {
      return curElem.category === category;
    });
    setproData(newData);
  };

  return (
    <>
      <section className="ProjectSection">
        <div className="project-container" >
        <div className="project-heading" >
              <h2>
                Recent <span>Works.</span>
              </h2>
            </div>
          <div className="project-box">
            
            <div className="navigation-bar" >
              <ul>
                <li>
                  <button
                    className="tabs"
                    onClick={() => setproData(ProjectApi)}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className="tabs"
                    onClick={() => filterItem("Creative")}
                  >
                    Creative
                  </button>
                </li>
                <li>
                  <button className="tabs" onClick={() => filterItem("Art")}>
                    Art
                  </button>
                </li>
                <li>
                  <button className="tabs" onClick={() => filterItem("Design")}>
                    Design
                  </button>
                </li>
                <li>
                  <button
                    className="tabs"
                    onClick={() => filterItem("Branding")}
                  >
                    Branding
                  </button>
                </li>
              </ul>
            </div>
            <div className="project-card" >
              {proData.map((sData) => {
                return (
                  <>
                    <ProjectComp sData={sData} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
