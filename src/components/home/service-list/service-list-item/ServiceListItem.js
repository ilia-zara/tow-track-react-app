import "./ServiceListItem.css";

const ServiceListItem = ({ src, title }) => (
  <div className="service-list-item">
    <img src={src} alt={title} />
    <p>{title}</p>
  </div>
);

export default ServiceListItem;
