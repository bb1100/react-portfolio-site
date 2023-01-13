import React, { useState } from "react";
import Modal from "./atoms/Modal";
import { yourData } from "../yourdata";


const Work2 = () => {
  const [toggled, setToggled] = useState(false)
  const toggleAccordion = (index) => {
    if (toggled === index) {
      return setToggled(null);
    }
    setToggled(index);
  }

  const slideLeft = () => {
    let slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className="section" id="work" tabIndex={-1}>
      <div className="container">
        <div className="work-wrapper">
          <div className="grid-container">
            <div className="arrows left" role="button" aria-label="arrow left" tabindex={0} onClick={slideLeft} onKeyDown={slideLeft}></div>
            <div className="grid work" id="slider2">
              {yourData.projects2.map((project, index) => (
                <>
                  <button key={project.index} className={`modal-thumbnails ${toggled === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                    <img
                      loading="lazy"
                      src={project.videoThumb}
                      alt={`Thumbnail for "${project.videoTitle}"`}
                      title={project.videoTitle}
                    />
                  </button>
                </>
              ))}
            </div>
            <div className="arrows right" role="button" aria-label="arrow right" tabindex={0} onClick={slideRight} onKeyDown={slideRight}></div>
          </div>
        </div>
      </div>
      {yourData.projects2.map((project, index) => (
        <>
          {toggled === index &&
            <Modal
              key={project.index}
              hide={() => toggleAccordion(false)}
              modalClass={`${toggled === index ? 'open' : 'closed'}`}
              ariaAttr={`${toggled === index ? 'false' : 'true'}`}
              videoTitle={project.videoTitle}
              paragraph={project.paragraph}
              videoSrcURL={project.videoSrcURL}
              projectLink={project.projectLink}
            />}
        </>
      ))}
    </div>
  )
}

export default Work2
