import evacuation from "media/evacuation.jpg";
import offRoadEvacuation from "media/offRoadEvacuation.jpg";
import fuelSapply from "media/fuelSapply.jpg";
import towing from "media/towing.jpg";
import recharge from "media/recharge.jpg";
import soberDriver from "media/soberDriver.jpg";

import React from "react";
import "./Home.css";
import MainBanner from "components/home-page/main-banner/MainBanner";
import AboutUs from "components/home-page/about-us/AboutUs";
import ServiceList from "components/home-page/service-list/ServiceList";
import SliderReviews from "components/home-page/slider-reviews/SliderReviews";

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
