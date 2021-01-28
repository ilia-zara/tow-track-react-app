import "./MainBanner.css";
import careImg2 from "../../../images/careImg2.png";

const MainBanner = () => (
  <div className="main-banner">
    <img src={careImg2} alt="Мы позаботимся о вашем авто" title="banner" />
    <p>Мы работаем круглосуточно! Без выходных!</p>
  </div>
);

export default MainBanner;
