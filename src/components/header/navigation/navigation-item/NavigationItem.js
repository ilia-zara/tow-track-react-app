import "./NavigationItem.css";

const NavigationItem = ({ title }) => (
  <li>
    <a href="#" className="active-link">
      {title}
    </a>
  </li>
);

export default NavigationItem;
