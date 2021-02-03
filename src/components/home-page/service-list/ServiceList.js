import "./ServiceList.css";
import SectionTitle from "components/section-title/SectionTitle";
import ServiceListItem from "components/home-page/service-list/service-list-item/ServiceListItem";

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
