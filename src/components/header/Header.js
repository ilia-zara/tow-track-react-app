import React from "react";
import "./Header.css";
import Logo from "components/header/logo/Logo";
import Title from "components/header/title/Title";
import Navigation from "components/header/navigation/Navigation";
import Contacts from "components/header/contacts/Contacts";

function Header() {
  const navList = [
    { id: 1, title: "О нас", link: "/about" },
    { id: 2, title: "Услуги", link: "/services" },
    { id: 3, title: "Отзывы", link: "/reviews" },
    { id: 4, title: "Контакты", link: "/contacts" },
  ];

  return (
    <React.Fragment>
      <header className="header">
        <div className="header-section">
          <Title />
          <Logo />
          <Navigation navList={navList} />
        </div>
        <Contacts />
      </header>
    </React.Fragment>
  );
}

export default Header;
