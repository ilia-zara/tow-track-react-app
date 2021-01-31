import React, { useState } from "react";
import "./SliderReviews.css";
import SliderData from "./slider-data/SliderData.js";
import SliderArrows from "./slider-arrows/SliderArrows.js";
import SliderDots from "./slider-dots/SliderDots.js";
import SliderContent from "./slider-content/SliderContent.js";

function SliderReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <SliderArrows
        prevSlide={() =>
          setActiveIndex(
            activeIndex < 1 ? SliderData.length - 1 : activeIndex - 1
          )
        }
        nextSlide={() =>
          setActiveIndex(
            activeIndex === SliderData.length - 1 ? 0 : activeIndex + 1
          )
        }
      />
      <SliderDots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default SliderReviews;
