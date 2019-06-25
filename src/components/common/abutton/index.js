import React from "react";
import "./index.scss";

export default function AButton(props) {
  return (
    <>
      <button className="abutton">{props.text}</button>
    </>
  );
}
