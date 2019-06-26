import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

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
