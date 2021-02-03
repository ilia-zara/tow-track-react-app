import React from "react";
import "./SliderDots.css";
import SliderData from "components/home-page/slider-reviews/slider-data/SliderData.js";

function SliderDots(props) {
  return (
    <div className="all-dots">
      {SliderData.map((slide, index) => (
        <span
          key={index}
          className={`${props.activeIndex === index ? "active-dot" : "dot"}`}
          onClick={(event) => props.onClick((event.target.value = index))}
        ></span>
      ))}
    </div>
  );
}

export default SliderDots;
