import "./Navigation.css";
import NavigationItem from "components/header/navigation/navigation-item/NavigationItem";

function Navigation({ navList }) {
  const navMenu = navList.map((item) => (
    <NavigationItem key={item.id} title={item.title} link={item.link} />
  ));

  return (
    <nav className="header-menu">
      <ul className="header-menu-list">{navMenu}</ul>
    </nav>
  );
}

export default Navigation;
