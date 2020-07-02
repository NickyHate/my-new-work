import React from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function Contacts() {
  return (
    <>
      <div className="content" id="contacts">
        <div className="content__description">
          <h2>Contact me</h2>
          <form className="form-container">
            <Input value="Name" />
            <Input value ="Phone"/>
            <Input value="Message"/>
          </form>
          <div className="upload-container">
          <Button name="send" />

          </div>
        </div>
      </div>
    </>
  );
}
