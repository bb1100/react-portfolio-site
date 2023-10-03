import React from "react";
import { Scrollchor } from 'react-scrollchor';

const Navbar = () => {


  return (
    <div className="section sticky-nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <Scrollchor to="#work">WORK</Scrollchor>
            <Scrollchor to="#promotion">CODE</Scrollchor>
            <Scrollchor to="#home" className="home"><span className="screen-reader-text">Home</span></Scrollchor>
            <Scrollchor to="#contact">CONTACT</Scrollchor>
            <a href="https://shop.blraj.com" target="_blank" rel="noopener noreferrer">SHOP</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
