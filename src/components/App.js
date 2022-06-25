import "./App.css";
import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import Popup from "./Popup";

function App() {
  /*
          ♤ ♡ ♧ ♢
    score & popup management
          ♤ ♡ ♧ ♢
  */

  const [score, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);
  const [popupMessage, setMessage] = useState(false);

  const incrScore = () => {
    const currentScore = score + 1;

    if (currentScore % DECK_SIZE === 0) {
      setPopupMessage("You did it!!  The cards have been reset.");
      setBest(currentScore);
    }

    setScore(currentScore);
  };

  const resetScore = () => {
    const finalScore = score;
    const difference = (bestScore - finalScore) * -1;
    setScore(0);

    let message = `You clicked ${score} unique cards!`;

    if (score > bestScore) {
      if (bestScore > 0) {
        message = `You beat your previous score of ${bestScore} by ${difference}!`;
      }
      setBest(finalScore);
    }

    setPopupMessage(message);
  };

  function setPopupMessage(message = false) {
    setMessage(message);
  }

  /*
          ♤ ♡ ♧ ♢
    Create & manage the deck
          ♤ ♡ ♧ ♢
  */

  const [cards, setCards] = useState([]);
  const [cutCards, setCut] = useState([]);
  const DECK_SIZE = 52;
  const CARD_LIMIT = 12;

  function shuffle(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const random = Math.floor(Math.random() * i);
      const temp = newArray[i];
      newArray[i] = newArray[random];
      newArray[random] = temp;
    }

    return newArray;
  }

  function shuffleAndCut(array = cards) {
    let deck = array;
    if (deck.length < 1) {
      return deck;
    }

    deck = shuffle(deck);
    deck = deck.slice(0, CARD_LIMIT);

    const unclicked = deck.find((card) => card.clicked === false);
    if (!unclicked) {
      console.log(true);
      shuffleAndCut(array);
      return;
    }

    return deck;
  }

  function setObjKey(array, key, value) {
    let result = array;
    result.forEach((object) => (object[key] = value));
    return result;
  }

  const handleClick = (e) => {
    const cardList = [...cards];
    const target = e.target;
    const container = target.closest("[data-key]");
    const key = container.getAttribute("data-key");

    const match = cardList.find((card) => card.key === key);

    if (match.clicked) {
      // reset the game state
      resetScore();
      const resetDeck = setObjKey(cards, "clicked", false);
      setCards([...resetDeck]);
    } else {
      match.clicked = true;
      incrScore();
    }

    setCut(shuffleAndCut(cards));
  };

  useEffect(() => {
    const newCards = [];
    const suits = [
      ["♤", "spades"],
      ["♡", "hearts"],
      ["♧", "clubs"],
      ["♢", "diamonds"],
    ];

    let count = 1;
    while (newCards.length < DECK_SIZE) {
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
          key: `${value}${suits[i][1]}`,
          clicked: false,
        });
      }

      count += 1;
    }

    setCards(newCards);
  }, []);

  useEffect(() => {
    setCut(shuffleAndCut(cards));
  }, [cards]);

  return (
    <div className="container">
      <Popup message={popupMessage} function={setPopupMessage} />
      <div className="flex space-between header">
        <div className="text-start">
          <h1>Memory</h1>
          <p>click every card exactly once to win</p>
        </div>
        <div className="text-end">
          <p>
            <strong>current:</strong> {score}
          </p>
          <p>
            <strong>best: </strong>
            {bestScore}
          </p>
        </div>
      </div>
      <div className="container screen-size">
        <Deck deck={cutCards} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
