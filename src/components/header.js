import React from "react";
import { Link, HashRouter } from "react-router-dom";

export default function Header() {
  return (
    <HashRouter forceRefresh={true}>
      <div className="menu-bar">
        <div className="menu-bar__list">
          <Link to="/#/" className="list-item">
            Home
          </Link>
          <Link to="/#/about" className="list-item">
            About me
          </Link>
          <Link to="/#/skills" className="list-item">
            Skills
          </Link>
          <Link to="/#/projects" className="list-item">
            Projects
          </Link>
          <Link to="/#/contacts" className="list-item">
            Contacts
          </Link>
        </div>
        <div className="menu-bar__tel">+7 (911) 72-72-72-8</div>
        <div className="menu-bar__lang">EN</div>
      </div>
    </HashRouter>
  );
}
