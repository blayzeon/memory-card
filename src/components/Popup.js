import React from "react";

export default function Popup(props) {
  const handleClick = () => {
    props.function(false);
  };

  if (props.message) {
    return (
      <div id="popup-message" className="popup-container">
        <div className="popup-content">
          {props.message}
          <button type="button" onClick={handleClick}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
