import React from "react";

export default function Button({ name }) {
  return (
    <a href="#" className="btn-container">
      <button className="contact-btn">{name}</button>
    </a>
  );
}
