import React from "react";

const Video = ({ videoSrcURL, videoTitle, paragraph, projectLink, isHorizontal }) => {
  return (
    <>
      {/* <video width="320" height="240" autoplay loop playsInline>
        <source src={videoSrcURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className={`iframe-container ${isHorizontal ? 'horizontal' : ''}`}>
        <iframe
          className="responsive-iframe"
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
      <div className={`video-content ${isHorizontal ? 'horizontal' : ''}`}>
        <h2 className="header">{videoTitle}</h2>
        {paragraph}
        {projectLink ?
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a> : null}
      </div>
    </>
  )
}
export default Video