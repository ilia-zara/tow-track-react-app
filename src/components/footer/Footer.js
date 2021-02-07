import "./Footer.css";
import iconInstagram from "media/iconInstagram.svg";
import iconViberSmall from "media/iconViberSmall.svg";
import iconTelegramSmall from "media/iconTelegramSmall.svg";
import Contacts from "components/header/contacts/Contacts";
import Logo from "components/header/logo/Logo";
import Title from "components/header/title/Title";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h3>Мы в социальных сетях</h3>
        <div className="socials">
          <img src={iconInstagram} alt="Иконка инстаграма" />
          <img src={iconViberSmall} alt="Иконка вайбера" />
          <img src={iconTelegramSmall} alt="Иконка телеграма" />
        </div>
        <Contacts />
        <Logo />
        <Title />
        <div className="author">
          <p>&copy;</p>
          <p>Made by Ilia_HL</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
