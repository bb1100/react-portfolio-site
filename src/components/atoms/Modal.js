import React from 'react';
import Video from "./Video";

const Modal = ({ hide, videoSrcURL, videoTitle, paragraph, projectLink, modalClass, ariaAttr, isHorizontal }) => {
  return (
    <>
      <div className={`modal-overlay ${modalClass}`} aria-hidden="true" />
      <div className={`modal ${modalClass}`} aria-modal aria-hidden={ariaAttr} tabIndex={-1} role="dialog">
        <div className="modal-wrapper">
          <div className="modal-header">
            <button type="button" className="modal-close-button" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&#x2715;</span>
            </button>
          </div>
          <div className={`modal-content ${isHorizontal ? 'one-column' : ''}`}>
            <Video
              videoTitle={videoTitle}
              paragraph={paragraph}
              videoSrcURL={videoSrcURL}
              projectLink={projectLink}
              isHorizontal={isHorizontal}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;