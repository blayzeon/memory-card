import React from "react";

export default function Card(props) {
  return (
    <div className="card flex center" id={props.id} onClick={props.event}>
      <img src={props.src} alt={props.alt} />
      <p>{props.alt}</p>
    </div>
  );
}
