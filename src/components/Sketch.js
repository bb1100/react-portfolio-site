import React from "react";

const Sketch = () => {
  return (
    <iframe className="sketch" title="animated sketch" src={process.env.PUBLIC_URL + "blraj-p5sketch/index.html"}></iframe>
  )
}

export default Sketch
