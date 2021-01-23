import "./Contacts.css";
import mts32x32 from "../../../images/mts32x32.png";
import velcom32x32 from "../../../images/velcom32x32.png";
import Number from "./number/Number.js";

const Contacts = () => (
  <div className="contacts">
    <div className="mts">
      <img src={mts32x32} title="mts logo" alt="mts logo" />
      <Number code="(29)" number="888 88 88" />
    </div>
    <div className="velcom">
      <img src={velcom32x32} title="velcom logo" alt="velcom logo" />
      <Number code="(33)" number="777 77 77" />
    </div>
  </div>
);

export default Contacts;
