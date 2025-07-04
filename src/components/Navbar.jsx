import React from "react";
import { Scrollchor } from 'react-scrollchor';

const Navbar = () => {


  return (
    <div className="section sticky-nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <Scrollchor to="#work">WORK</Scrollchor>
            <Scrollchor to="#about">ABOUT</Scrollchor>
            <Scrollchor to="#home" className="home"><span className="screen-reader-text">Home</span></Scrollchor>
            <Scrollchor to="#promotion">PLAY</Scrollchor>
            <Scrollchor to="#contact">CONTACT</Scrollchor>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
