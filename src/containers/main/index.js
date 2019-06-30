import React, { useState } from "react";
import "./index.scss";
import { AInput, AButton } from "../../components/common";
import { Redirect } from "react-router-dom";
// 메인 화면입니다. ( containers )

export default function Main(props) {
  const [sumname, setSumname] = useState("");
  const [clickSearch, setClickSearch] = useState(false);

  // 입력창에 글자를 넣으면 즉시 state(상태)에 반영됩니다.
  const handleChange = e => {
    setSumname(e.target.value);
  };

  // 검색 버튼을 누를 경우 유효성 검사 (submit) 이후 주소의 파라미터 값으로
  // sumname을 Search 컴포넌트에 전달합니다.
  const onSearch = e => {
    e.preventDefault();
    setClickSearch(true);
  };

  return (
    <form onSubmit={onSearch}>
      <div className="app-main">
        <div className="app-main-title">OP.QR</div>
        <br />
        <div className="app-main-sub_title">
          쉽게 따라하는 <span>전적검색</span> 사이트
        </div>
      </div>
      <div className="app-search">
        <AInput
          onChange={handleChange}
          value={sumname}
          placeholder="소환사명을 입력하세요!"
        />
        <AButton type="submit" text="지금 검색하기" />
      </div>
      {clickSearch && <Redirect push to={`/search/${sumname}`} />}
    </form>
  );
}
