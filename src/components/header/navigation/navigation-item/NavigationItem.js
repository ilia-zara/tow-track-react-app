import { Link } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = ({ title, link }) => (
  <li>
    <Link to={link} className="active-link">
      {title}
    </Link>
  </li>
);

export default NavigationItem;
