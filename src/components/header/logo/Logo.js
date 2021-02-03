import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "media/logo.png";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} title="Logo" alt="Logo" />
    </Link>
  </div>
);

export default Logo;
