import "./ServiceList.css";
import SectionTitle from "../section-title/SectionTitle.js";
import ServiceListItem from "./service-list-item/ServiceListItem.js";

function ServiceList({ services }) {
  const ServList = services.map((item) => (
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
