import React from "react";
import "./index.scss";

export default function Sections(props) {
  return (
    <div className="section">
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
