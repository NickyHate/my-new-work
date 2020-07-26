import React from "react";
import StickySlider from "../components/StickySlider/StickySlider";
import css from "../Project.module.scss";

export default function Projects() {
  return (
    <>
      <div className={css.container}>
        <div className={css.slider}>
          <StickySlider />
        </div>
      </div>
    </>
  );
}
