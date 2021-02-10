import "./About.css";
import AboutUsItem from "components/about-page/about-us-item/AboutUsItem";
import SectionTitle from "components/section-title/SectionTitle";
import Footer from "components/footer/Footer";
import ClickToCall from "components/click-to-call/ClickToCall";

function About() {
  const aboutUsList = [
    {
      id: 1,
      text:
        "С 2008 года служба “ГродноАвтопомощь” оказала услуги по транспортировке более чем 10 000 автомобилей и другой техники различной сложности;",
    },
    {
      id: 2,
      text:
        "Используемая техника – профессиональные эвакуаторы приобретённые в Европе таких фирм, как “Omars” и “Algema”, которые более 20 лет специализируются на разработке и внедрении техники и оборудования для эвакуации автомобилей. Услугами этих производителей пользуется большинство Европейских служб эвакуации (“ADAC” в Германии и др.);",
    },
    { id: 3, text: "Мы гарантируем высокое качество оказываемых услуг;" },
    {
      id: 4,
      text:
        "Для удобства пассажиров транспортных средств, попавших в непредвиденную ситуацию, имеем 6 посадочных мест для их доставки к месту назначения в комфортных условиях;",
    },
    {
      id: 5,
      text:
        "Диспетчерская служба примет Ваш заказ и при необходимости проконсультирует о доставке Вашего автомобиля на СТО с учётом характера его неисправности (повреждения);",
    },
    {
      id: 6,
      text:
        "Наша компания имеет огромный опыт эвакуации, в том числе в сложных условиях;",
    },
  ];

  const aboutUsInfo = aboutUsList.map((item) => (
    <AboutUsItem key={item.id} text={item.text} />
  ));

  return (
    <div className="about-us">
      <SectionTitle title="О нашей компании" />
      <div className="about-us-list">
        <ol>{aboutUsInfo}</ol>
      </div>
      <ClickToCall />
      <Footer />
    </div>
  );
}

export default About;
