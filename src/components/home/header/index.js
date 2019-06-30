import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
// 항상 고정되는 최상단 헤더 입니다.

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="app_home">OP.QR</div>
      </Link>
      <div className="app_license_text">MIT license</div>
    </div>
  );
}
