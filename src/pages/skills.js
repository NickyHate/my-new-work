import React from "react";

export default function Skills() {
  return (
    <>
      <div className="content" id="skills">
        <div className="content__description">
          <h2>My skills</h2>
          <div className="skills-list">
            <div className="skills-list__left-side">
              <div className="skills-item">Adaptive and responsive layouts</div>
              <div className="skills-item">Graphic editors: Figma, Photoshop</div>
              <div className="skills-item">HTML and CSS</div>
              <div className="skills-item">JavaScript and frameworks</div>
            </div>
            <div className="skills-list__right-side">
              <div className="skills-item">Cross platformm development</div>
              <div className="skills-item">Mobile development</div>
              <div className="skills-item">Database and query languages</div>
              <div className="skills-item">Version control systems</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
