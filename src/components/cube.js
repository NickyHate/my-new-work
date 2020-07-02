import React from "react";

export default function Cube() {
  return (
    <div className="content__image">
      <div className="cube">
        <div className="side top">
          <p className="side-text">html5</p>
        </div>
        <div className="side right">
          <p className="side-text">css3</p>
        </div>
        <div className="side left">
          <p className="side-text">js</p>
        </div>
        <div className="side bottom">
          <p className="side-text">cms</p>
        </div>
        <div className="side front">
          <p className="side-text">react</p>
        </div>
        <div className="side back">
          <p className="side-text">webpack</p>
        </div>
      </div>
    </div>
  );
}
