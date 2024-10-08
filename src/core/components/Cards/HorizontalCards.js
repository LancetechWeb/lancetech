import React from "react";
import { HorzStyle } from "./style";

const HorizontalCards = ({ cardImage, cardTitle, cardBody }) => {
  return (
    <HorzStyle>
      <div className="cardLeft">
        <img className="cardImage" src={cardImage} alt={cardTitle} />
      </div>
      <div className="cardRight">
        <div className="cardTitle"> {cardTitle} </div>
        <div className="cardBody">{cardBody}</div>
      </div>
    </HorzStyle>
  );
};

export default HorizontalCards;
