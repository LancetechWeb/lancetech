import React from "react";
import { Style } from "./style";

const Cards = ({ cardImage, cardBody, handle }) => {
  return (
    <Style>
      <div className="cardHeader">
        <img className="cardImage" src={cardImage} alt={cardImage} />
      </div>
      <div className="cardBody">{cardBody}</div>
      <div className="handle"> {handle} </div>
    </Style>
  );
};

export default Cards;
