import React from "react";
import "./index.scss";
// 기본 버튼입니다.
// type (버튼타입) , onClick (클릭이벤트) , text (버튼이름)

export default function AButton(props) {
  return (
    <>
      <button type={props.type} onClick={props.onClick} className="abutton">
        {props.text}
      </button>
    </>
  );
}
