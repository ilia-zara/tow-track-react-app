import offRoad from "media/offRoad.jpeg";
import nonStandart from "media/nonStandart.jpg";
import towingTrucks from "media/towingTrucks.jpg";

import "./Services.css";
import ServicesItem from "components/services-page/services-item/ServicesItem";
import SectionTitle from "components/section-title/SectionTitle";
import Footer from "components/footer/Footer";
import ClickToCall from "components/click-to-call/ClickToCall";

function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Эвакуация грузовых авто",
      src: towingTrucks,
      text:
        "Наша компания осуществляет оперативную эвакуацию грузовых автомобилей, автопоездов и прицепов в Беларуси.От своего легкового аналога грузовой эвакуатор отличается мощностью, габаритами и грузоподъемностью. Ему приходится иметь дело с крупногабаритной грузовой техникой, поэтому все его узлы и агрегаты должны иметь повышенную прочность.",
    },
    {
      id: 2,
      title: "Перевозка нестандартных грузов",
      src: nonStandart,
      text:
        "Мы берем на контроль весь процесс организации грузоперевозок, начиная с оформления необходимых документов и заканчивая доставкой груза в указанное место. Опыт работы и репутация позволяют нам в кратчайшие сроки получить разрешение на перевозку. При перевозке грузов, габариты которых превышают стандартные показатели, мы гарантируем разработку маршрута с учетом всех нестандартных объектов и параметров дороги. В случае необходимости мы также организуем работу транспортных служб.",
    },
    {
      id: 3,
      title: "Внедорожная эвакуация",
      src: offRoad,
      text:
        "Внедорожная эвакуация от нашей компании, представляет комплекс работ по вызволению любой автомотоспецтехники из труднодоступных, труднопроходимых мест. Таких мест очень много, на просторах нашей родины! Если вы застряли в грязи, ваш автомобиль 'закопался', или вы катались на квадрацикле и утопили его в болоте, то Вы всегда можете положится на нас!",
    },
  ];

  const serviceInfo = serviceList.map((item) => (
    <ServicesItem
      key={item.id}
      src={item.src}
      text={item.text}
      title={item.title}
    />
  ));

  return (
    <div className="services">
      <SectionTitle title="Наши услуги" />
      <div className="services-list">{serviceInfo}</div>
      <ClickToCall />
      <Footer />
    </div>
  );
}

export default Services;
