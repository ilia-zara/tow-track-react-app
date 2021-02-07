import div from "react";
import "./Home.css";
import MainBanner from "components/home-page/main-banner/MainBanner";
import AboutUs from "components/home-page/about-us/AboutUs";
import ServiceList from "components/home-page/service-list/ServiceList";
import SliderReviews from "components/home-page/slider-reviews/SliderReviews";
import Form from "components/home-page/form-callback/Form";
import UserGeolocation from "components/home-page/user-geolocation/UserGeolocation";
/* import UserLocation from "components/home-page/get-user-location/UserLocation"; */

function Home() {
  return (
    <div className="home-page">
      <MainBanner />
      <AboutUs />
      <ServiceList />
      <SliderReviews />
      <Form />
      <UserGeolocation />
      {/* <UserLocation /> */}
    </div>
  );
}

export default Home;
