import evacuation from "media/evacuation.jpg";
import offRoadEvacuation from "media/offRoadEvacuation.jpg";
import fuelSapply from "media/fuelSapply.jpg";
import towing from "media/towing.jpg";
import recharge from "media/recharge.jpg";
import soberDriver from "media/soberDriver.jpg";

import "./ServiceList.css";
import SectionTitle from "components/section-title/SectionTitle";
import ServiceListItem from "components/home-page/service-list/service-list-item/ServiceListItem";

function ServiceList() {
  const ServiceListImages = [
    { id: 1, src: evacuation, title: "Эвакуация" },
    { id: 2, src: offRoadEvacuation, title: "Внедорожная эвакуация" },
    { id: 3, src: fuelSapply, title: "Подвоз топлива" },
    { id: 4, src: towing, title: "Буксировка" },
    { id: 5, src: recharge, title: "Прикурить авто" },
    { id: 6, src: soberDriver, title: "Трезвый водитель" },
  ];

  const ServList = ServiceListImages.map((item) => (
    <ServiceListItem key={item.id} src={item.src} title={item.title} />
  ));

  return (
    <section>
      <SectionTitle title="Наши услуги" />
      <div className="service-list">{ServList}</div>
    </section>
  );
}

export default ServiceList;
