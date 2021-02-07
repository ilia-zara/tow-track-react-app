import "./ServicesItem.css";

function ServicesItem({ text, src, title }) {
  return (
    <section>
      <div className="services-item">
        <div className="services-item-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="services-item-img">
          <img src={src} alt="Виды услуг" />
        </div>
      </div>
    </section>
  );
}

export default ServicesItem;
