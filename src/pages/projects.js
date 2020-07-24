import React from "react";
import StickySlider from "../components/StickySlider/StickySlider";

export default function Projects() {
  return (
    <>
      <div className="content" id="projects">
        <div className="content__description">
          <div className="slider text-content">
            <StickySlider />
          </div>
        </div>
      </div>
    </>
  );
}
