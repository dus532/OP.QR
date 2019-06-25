import React from "react";
import "./index.scss";
import { AInput, AButton } from "../../components/common";

export default function Main(props) {
  return (
    <>
      <div className="app-main">
        <div className="app-main-title">OP.QR</div>
        <br />
        <div className="app-main-sub_title">쉽게 따라하는 전적검색 사이트</div>
      </div>
      <div className="app-serach">
        <AInput placeholder="소환사명을 입력하세요!" />
        <AButton text="지금 검색하기" />
      </div>
    </>
  );
}
