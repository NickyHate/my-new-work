import React from "react";
import Button from "../components/button";

export default function About() {
  return (
    <>
      <div className="content" id="about">
        <div className="content__description">
          <h2>Nikita tokarev</h2>
          <p className="text-content">
            {" "}
            I am graduated Saint-Petrrsburg Mining University
            <br /> for the IT-programming. Last year I became interested <br />
            of web development.
            <br/><br/>
            I have completed front-end developer course in Skillox university.
          </p>
          <Button name="see projects" />
        </div>
      </div>
    </>
  );
}
