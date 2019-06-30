import React from "react";
import "./index.scss";
// 기본 입력입니다.
// value (value값) , name (지정된 이름) , id (지정된 아이디)
// onchange (변경시 이벤트) , placeholder (플레이스홀더)

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
