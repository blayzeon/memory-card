import "./Card.css";
import React from "react";

export default function Card(props) {
  const suitClass = `card-${props.suit[1]} card-container`;
  return (
    <div className={suitClass} data-key={props.id} onClick={props.event}>
      <div className="card-pair card-left">
        <p>{props.value}</p>
        <div>{props.suit[0]}</div>
      </div>
      <h1 className="card-center large-screen">{props.value}</h1>
      <div className="card-pair card-right upsidedown large-screen">
        <p>{props.value}</p>
        <div>{props.suit[0]}</div>
      </div>
    </div>
  );
}
