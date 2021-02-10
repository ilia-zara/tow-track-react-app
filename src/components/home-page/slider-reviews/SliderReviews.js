import React, { useState, useEffect } from "react";
import "./SliderReviews.css";
import SectionTitle from "components/section-title/SectionTitle";
import SliderData from "components/home-page/slider-reviews/slider-data/SliderData";
import SliderArrows from "components/home-page/slider-reviews/slider-arrows/SliderArrows";
import SliderDots from "components/home-page/slider-reviews/slider-dots/SliderDots";
import SliderContent from "components/home-page/slider-reviews/slider-content/SliderContent";

function SliderReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = SliderData.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === SliderData.length - 1 ? 0 : activeIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section>
      <SectionTitle title="Отзывы" />
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} />
        <SliderArrows
          prevSlide={() =>
            setActiveIndex(activeIndex === 0 ? length : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
          }
        />
        <SliderDots
          activeIndex={activeIndex}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </section>
  );
}

export default SliderReviews;
