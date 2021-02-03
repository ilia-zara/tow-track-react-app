import React from "react";
import "./SliderContent.css";
import SliderData from "components/home-page/slider-reviews/slider-data/SliderData";

function SliderContent(props) {
  return (
    <React.Fragment>
      {SliderData.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "slides"}
        >
          {index === props.activeIndex && (
            <p className="slide-name">{slide.name}</p>
          )}
          {index === props.activeIndex && (
            <p className="slide-text">{slide.text}</p>
          )}
        </div>
      ))}
    </React.Fragment>
  );
}

export default SliderContent;
