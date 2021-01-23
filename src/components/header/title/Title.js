import React from "react";
import "./Title.css";

const Title = ({ title, subTitle }) => (
  <div className="header-title">
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </div>
);

export default Title;
