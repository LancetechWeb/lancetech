import React from "react";
import { PlainCardsStyle } from "./style";

const PlainCards = ({ image, title, body }) => {
  return (
    <PlainCardsStyle>
      <div className="PlainCardHead">
        <img src={image} alt={title} />
      </div>
      <div className="PlainCardTitle">{title}</div>
      <div className="PlainCardBody">{body}</div>
    </PlainCardsStyle>
  );
};

export default PlainCards;
