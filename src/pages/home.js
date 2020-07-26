import React from "react";
import Cube from "../components/cube";
import Button from "../components/button";

export default function Home() {
  return (
    <>
      <div  id="home">
        <div className="content__description">
          <p className="text-content">
            My name is Nikita Tokarev.
            <br />
            I'm junior Frontend developer
            <br />
            from Saint-Petersburg.
          </p>
          <Button name="Contact me" />
        </div>
        <Cube />
      </div>
    </>
  );
}
