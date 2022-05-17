import React from "react";

const ProjectComp = ({ sData }) => {
  return (
    <>
      <div className="projectCard-box" key={sData.id}>
        <img src={sData.profileImg} alt="Project-Img" />
        <div className="card-containts">
          <h2>{sData.userName}</h2>

          <p>{sData.Paragraph}</p>
          <div className="gethub-btn">
            <a
              href="https://github.com/shubuu07/Covid-19-Tracker.git"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Github <i className="bx bxl-github"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComp;
