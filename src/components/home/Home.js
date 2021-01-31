import evacuation from "../../images/evacuation.jpg";
import offRoadEvacuation from "../../images/offRoadEvacuation.jpg";
import fuelSapply from "../../images/fuelSapply.jpg";
import towing from "../../images/towing.jpg";
import recharge from "../../images/recharge.jpg";
import soberDriver from "../../images/soberDriver.jpg";

import React from "react";
import "./Home.css";
import MainBanner from "./main-banner/MainBanner.js";
import AboutUs from "./about-us/AboutUs.js";
import ServiceList from "./service-list/ServiceList.js";
import SliderReviews from "./slider-reviews/SliderReviews.js";

function Home() {
  const ServiceListImages = [
    { id: 1, src: evacuation, title: "Эвакуация" },
    { id: 2, src: offRoadEvacuation, title: "Внедорожная эвакуация" },
    { id: 3, src: fuelSapply, title: "Подвоз топлива" },
    { id: 4, src: towing, title: "Буксировка" },
    { id: 5, src: recharge, title: "Прикурить авто" },
    { id: 6, src: soberDriver, title: "Трезвый водитель" },
  ];

  return (
    <React.Fragment>
      <MainBanner />
      <AboutUs />
      <ServiceList services={ServiceListImages} />
      <SliderReviews />
    </React.Fragment>
  );
}

export default Home;
