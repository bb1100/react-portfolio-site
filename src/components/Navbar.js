import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Navbar = () => {
  return (
    <div className="section sticky-nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")} onKeyDown={() => scrollTo("#work")}>WORK</button>
            <button onClick={() => scrollTo("#promotion")} onKeyDown={() => scrollTo("#promotion")}>CODE</button>
            <button onClick={() => scrollTo("#home")} onKeyDown={() => scrollTo("#home")} className="home"><span className="screen-reader-text">Home</span></button>
            <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>CONTACT</button>
            <a href="https://shop.blraj.com" target="_blank" rel="noopener noreferrer">SHOP</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
