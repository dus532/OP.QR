import React from "react";
import "./index.scss";

export default function AButton(props) {
  return (
    <>
      <button type={props.type} onClick={props.onClick} className="abutton">
        {props.text}
      </button>
    </>
  );
}
