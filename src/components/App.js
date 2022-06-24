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
    if (score > bestScore) {
      setBest(score);
    }
    setScore(0);
  };

  return (
    <div className="container">
      <div className="flex space-between margin-bottom">
        <div>
          <h1>Memory</h1>
          <p>click every card exactly once to win</p>
        </div>
        <div>
          <p>current: {score}</p>
          <p>best: {bestScore}</p>
        </div>
      </div>
      <Deck score={incrScore} reset={resetScore} />
    </div>
  );
}

export default App;
