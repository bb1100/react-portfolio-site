import React from "react";
import { yourData } from "../yourdata";
import { Fade } from "react-awesome-reveal";
//import cvPDF from "../images/CV.pdf"

const About = () => {
  return (
    <div className="secion" id="about" tabIndex={-1}>
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade>
              <h1>About</h1>
            </Fade>
            {yourData.aboutParagraph}

            {/* <a className="link" href={cvPDF} target="_blank" rel="noreferrer noopener">Download CV &rsaquo;</a> */}
          </div>
          <div className="image-wrapper">
            <img src={yourData.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
