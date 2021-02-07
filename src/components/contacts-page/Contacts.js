import evacuator from "media/evacuator.jpg";
import "./Contacts.css";
import Footer from "components/footer/Footer";
import SectionTitle from "components/section-title/SectionTitle";

function Contacts() {
  return (
    <div className="our-contacts">
      <SectionTitle title="Контакты" />
      <h3>Наша компания работает 24 часа в сутки, 7 дней в неделю</h3>
      <div className="contacts-img">
        <img src={evacuator} alt="Фото эвакуатора" />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
