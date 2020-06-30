import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

export default function Header() {
  return (
    <BrowserRouter>
      <div className="menu-bar">
        <div className="menu-bar__list">
          <Link to="/" className="list-item">
            Home
          </Link>
          <a href="#about" className="list-item">
            About me
          </a>
          <a href="#skills" className="list-item">
            Skills
          </a>
          <a href="#projects" className="list-item">
            Projects
          </a>
          <a href="#contacts" className="list-item">
            Contacts
          </a>
        </div>
        <div className="menu-bar__tel">+7 (911) 72-72-72-8</div>
        <div className="menu-bar__lang">EN</div>
      </div>
    </BrowserRouter>
  );
}
