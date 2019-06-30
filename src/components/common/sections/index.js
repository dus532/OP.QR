import React from "react";
import "./index.scss";
// 기본 섹션입니다. ( 아래 한줄 표시와 각종 애니메이션이 있습니다 )
// className ( 클래스 추가 가능 )
// ** section_loading에 로딩 애니메이션이 있습니다.
// title, subtitle ( 왼쪽 글씨들 )
// title_right, subtitlte_right ( 오른쪽 글씨들 )

export default function Sections(props) {
  return (
    <div className={`section ${props.className}`}>
      <div>
        <div className="section_big">{props.title}</div>
        <div className="section_small">{props.subtitle}</div>
      </div>
      <div className="section_right">
        <div className="section_big">{props.title_right}</div>
        <div className="section_small">{props.subtitle_right}</div>
      </div>
    </div>
  );
}
