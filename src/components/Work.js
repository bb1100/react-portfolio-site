import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Modal from "./atoms/Modal";
import { yourData } from "../yourdata";


const Work = () => {
  const [toggled, setToggled] = useState(false)
  const toggleAccordion = (index) => {
    if (toggled === index) {
      return setToggled(null);
    }
    setToggled(index);
  }
  return (
    <div className="section" id="work" tabIndex={-1}>
      <div className="container">
        <div className="work-wrapper">
          <Fade>
            <h1>Work</h1>
            <p className="work-headline">A selection of Augmented Reality projects. Click on each video to see more.</p>
          </Fade>
          <div className="grid-container">
            <div className="grid work">
              {yourData.projects.map((project, index) => (
                <>
                  <button key={project.index} className={`modal-thumbnails ${toggled === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                    <img
                      src={project.videoThumb}
                      alt={project.paragraph}
                      title={project.videoTitle}
                    />
                  </button>
                </>
              ))}
            </div>
            <div className="arrows left"></div>
            <div className="arrows right"></div>
          </div>
        </div>
      </div>
      {yourData.projects.map((project, index) => (
        <>
          <Modal
            key={project.index}
            hide={() => toggleAccordion(false)}
            modalClass={`${toggled === index ? 'open' : 'closed'}`}
            ariaAttr={`${toggled === index ? 'false' : 'true'}`}
            videoTitle={project.videoTitle}
            paragraph={project.paragraph}
            videoSrcURL={project.videoSrcURL}
            projectLink={project.projectLink}
          />
        </>
      ))}
    </div>
  )
}

export default Work
