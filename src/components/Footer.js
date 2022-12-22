import React from "react";
import { yourData } from "../yourdata";

const Footer = () => {
  return (
    <footer className="section" id="footer">
      &copy;{(new Date().getFullYear())} {yourData.name}
      <a href={yourData.footerlink} title={yourData.footerlabel} target="_blank" rel="noreferrer noopener">
        {yourData.footerlabel}
      </a>
    </footer>
  )
}

export default Footer
