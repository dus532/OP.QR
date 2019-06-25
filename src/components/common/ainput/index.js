import React from "react";
import "./index.scss";

export default function AInput(props) {
  return (
    <>
      <input placeholder={props.placeholder} className="common-ainput" />
    </>
  );
}
