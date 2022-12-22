import React from "react";
import { Fade } from "react-awesome-reveal";
import Card from "./atoms/Card";
import { yourData } from "../yourdata";

const Promotion = () => {
  return (
    <div className="section" id="promotion">
      <div className="container">
        <div className="promotion-wrapper">
          <Fade>
            <h1>{yourData.promotionHeading}</h1>
          </Fade>
          {/* <p>{yourData.promotionPara}</p> */}

          <div className="grid promo">
            {yourData.codepens.map((item, index) => (
              <Card
                key={index}
                heading={item.heading}
                paragraph={item.paragraph}
                imgUrl={item.imgUrl}
                projectLink={item.projectLink}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
