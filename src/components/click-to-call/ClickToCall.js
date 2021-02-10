import "./ClickToCall.css";

function ClickToCall() {
  return (
    <div className="click-to-call">
      <a href="tel:+375298677461">
        <div className="phone animation"></div>
      </a>
    </div>
  );
}

export default ClickToCall;
