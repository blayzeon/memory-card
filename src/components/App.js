import "./App.css";
import React, { useState } from "react";
import Deck from "./Deck";

function App() {
  const [score, setScore] = useState(0);
  const cards = [
    {
      src: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
      alt: "pikachu",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
      alt: "bulbasaur",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
      alt: "charmander",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
      alt: "squirtle",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/rattata.png",
      alt: "rattata",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/pidgey.png",
      alt: "pidgey",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/caterpie.png",
      alt: "caterpie",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/geodude.png",
      alt: "geodude",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/zubat.png",
      alt: "zubat",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/mankey.png",
      alt: "mankey",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/meowth.png",
      alt: "meowth",
    },
    {
      src: "https://img.pokemondb.net/sprites/home/normal/abra.png",
      alt: "abra",
    },
  ];

  let bestScore = 0;

  const incrScore = () => {
    const currentScore = score + 1;
    setScore(currentScore);
  };

  const resetScore = () => {
    if (score > bestScore) {
      bestScore = score;
    }
    setScore(0);
  };

  return (
    <div className="container">
      <div className="flex space-between margin-bottom">
        <div>
          <h1>Game</h1>
          <p>game tagline</p>
        </div>
        <div>
          <p>score: {score}</p>
          <p>best score: {bestScore}</p>
        </div>
      </div>
      <Deck cards={cards} score={incrScore} reset={resetScore} />
    </div>
  );
}

export default App;
