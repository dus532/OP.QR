import React from "react";
import "./index.scss";

export default function AInput(props) {
  return (
    <>
      <input
        value={props.value}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="common-ainput"
      />
    </>
  );
}
