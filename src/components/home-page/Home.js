import div from "react";
import "./Home.css";
import MainBanner from "components/home-page/main-banner/MainBanner";
import AboutUs from "components/home-page/about-us/AboutUs";
import ServiceList from "components/home-page/service-list/ServiceList";
import SliderReviews from "components/home-page/slider-reviews/SliderReviews";
import Form from "components/home-page/form-callback/Form";
import UserGeolocation from "components/home-page/user-geolocation/UserGeolocation";
import Footer from "components/footer/Footer";
import ClickToCall from "components/click-to-call/ClickToCall";

function Home() {
  return (
    <div className="home-page">
      <MainBanner />
      <AboutUs />
      <ServiceList />
      <SliderReviews />
      <Form />
      <UserGeolocation />
      <ClickToCall />
      <Footer />
    </div>
  );
}

export default Home;
