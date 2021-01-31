import React from "react";
import "./SliderContent.css";
import SliderData from "../slider-data/SliderData.js";

function SliderContent(props) {
  return (
    <React.Fragment>
      {SliderData.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
          <p className="slide-name">{slide.name}</p>
          <p className="slide-text">{slide.text}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

export default SliderContent;
