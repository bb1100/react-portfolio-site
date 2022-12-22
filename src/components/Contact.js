import React from "react";
import { Fade } from "react-awesome-reveal";
import { yourData } from "../yourdata";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-container">
          <Fade>
            <h1>Contact</h1>
          </Fade>
          <h2 className="email-link">&#98;&#108;&#114;&#97;&#106;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</h2>
          {/* <h3>{yourData.contactSubHeading}</h3> */}
          <div className="social-icons">
            {yourData.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={socialLink.img} alt="icons"></img> */}
                {socialLink.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
