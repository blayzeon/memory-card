import React from "react";
import Card from "./Card";

export default function Deck(props) {
  return (
    <div className="grid container">
      {props.deck.map((card) => {
        return (
          <Card
            suit={card.suit}
            value={card.value}
            key={card.key}
            id={card.key}
            event={props.handleClick}
          />
        );
      })}
    </div>
  );
}
