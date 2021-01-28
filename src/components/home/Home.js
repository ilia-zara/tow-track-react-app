import React from "react";
import "./Home.css";
import MainBanner from "./main-banner/MainBanner.js";
import AboutUs from "./about-us/AboutUs.js";

function Home() {
  return (
    <React.Fragment>
      <MainBanner />
      <AboutUs />
    </React.Fragment>
  );
}

export default Home;
