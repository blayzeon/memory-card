import "./App.css";
import React, { useState } from "react";
import Deck from "./Deck";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);

  const incrScore = () => {
    const currentScore = score + 1;
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

    alert(message);
  };

  return (
    <div className="container">
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
      <Deck score={incrScore} reset={resetScore} />
    </div>
  );
}

export default App;
