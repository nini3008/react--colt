import React from "react";
import "./coin.css";

const CoinDisplay = props => {
  return (
    <div className="coin">
      <img src={props.info.imgSrc} alt={props.info.side} />
    </div>
  );
};

export default CoinDisplay;
