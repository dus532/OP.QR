import React from "react";
import "./index.scss";
import { Sections } from "../../components/common";

export default function Search(props) {
  return (
    <>
      <div className="search_bg">
        <div className="search_id">{props.match.params.username}</div>
        <div className="search_lv">[ 150 ]</div>
      </div>
      <Sections
        title="현재"
        subtitle="now"
        title_right="게임중"
        subtitle_right="playing"
      />
      <Sections
        title="리그"
        subtitle="league"
        title_right="IRON 4"
        subtitle_right="56 Point"
      />
      <Sections
        title="승/패"
        subtitle="win/lose"
        title_right="23 W / 13 L"
        subtitle_right="56 %"
      />
    </>
  );
}
