import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Projects() {
  const slider = (
    <AwesomeSlider animation="scaleOutAnimation">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
  return (
    <>
      <div className="content">{slider}</div>
    </>
  );
}
