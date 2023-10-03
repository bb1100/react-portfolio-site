import * as React from "react"
import { Scrollchor } from 'react-scrollchor';
import { Fade } from "react-awesome-reveal"
import { yourData } from "../yourdata"
import Sketch from "./iFrameSketch"

const Header = () => (
  <>
    <header className="section header" id="home">
      <Sketch />
      <div className="container">
        <div className="header-wrapper">
          <Fade>
            <h1>
              {yourData.headername}
            </h1>
          </Fade>
          <Fade delay={500}>
            <button className="primary-btn"><Scrollchor to="#contact">Work with me (◔◡◔)</Scrollchor></button>
          </Fade>
        </div>
      </div>
    </header>
  </>
)

export default Header
