import React from "react";

const Video = ({ videoSrcURL, videoTitle, paragraph, projectLink }) => {
  return (
    <>
      {/* <video width="320" height="240" autoplay loop playsInline>
        <source src={videoSrcURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; encrypted-media; autoplay; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      <div className="video-content">
        <h2 className="header">{videoTitle}</h2>
        <p className="text">{paragraph}</p>
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