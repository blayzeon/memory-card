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

  function cutDeck(deck, amount) {
    const newDeck = deck.splice(0, amount);
    return newDeck;
  }

  /*
    Create the DECK
    ♤ ♡ ♧ ♢
  */

  useEffect(() => {
    const newCards = [];
    const suits = [
      ["♤", "spades"],
      ["♡", "hearts"],
      ["♧", "clubs"],
      ["♢", "diamonds"],
    ];

    let count = 1;
    while (newCards.length < 52) {
      let value = count;
      if (value === 1) {
        value = "A";
      } else if (value === 11) {
        value = "J";
      } else if (value === 12) {
        value = "Q";
      } else if (value === 13) {
        value = "K";
      }

      for (let i = 0; i < suits.length; i += 1) {
        newCards.push({
          suit: suits[i],
          value,
          key: uuidv4(),
          clicked: false,
        });
      }

      count += 1;
    }

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
            suit={card.suit}
            value={card.value}
            key={card.key}
            id={card.key}
            event={handleClick}
          />
        );
      })}
    </div>
  );
}
