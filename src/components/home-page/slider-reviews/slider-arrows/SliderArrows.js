import React from "react";
import "./SliderArrows.css";

function SliderArrows(porps) {
  return (
    <div className="arrows">
      <span className="prev" onClick={porps.prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={porps.nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default SliderArrows;
