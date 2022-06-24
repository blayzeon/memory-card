import React, { useState, useEffect } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

export default function Deck(props) {
  const [cards, setCards] = useState([]);

  function shuffle(array) {
    let newArray = array;
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const random = Math.floor(Math.random() * i);
      const temp = newArray[i];
      newArray[i] = newArray[random];
      newArray[random] = temp;
    }

    return newArray;
  }

  useEffect(() => {
    const newCards = props.cards.map((card) => {
      return {
        src: card.src,
        alt: card.alt,
        key: uuidv4(),
        clicked: false,
      };
    });

    setCards(newCards);
  }, []);

  const handleClick = (e) => {
    const cardList = [...cards];

    const target = e.target;
    const container = target.closest("div");
    const key = container.id;

    const match = cardList.find((card) => card.key === key);

    if (match.clicked) {
      props.reset();
    } else {
      match.clicked = true;
      const shuffled = shuffle(cardList);
      setCards([...shuffled]);
      props.score();
    }
  };

  return (
    <div className="grid container">
      {cards.map((card) => {
        return (
          <Card
            src={card.src}
            alt={card.alt}
            key={card.key}
            id={card.key}
            event={handleClick}
          />
        );
      })}
    </div>
  );
}
