import React from "react";
import "./Header.css";
import Logo from "./logo/Logo.js";
import Title from "./title/Title.js";
import Navigation from "./navigation/Navigation.js";
import Contacts from "./contacts/Contacts.js";

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
