import React from "react";
import "./whatAndWhere.css";
import What from "../components/What/What";
import Where from "../components/Where/Where";

export default function WhatAndWhere() {
  return (
    <div className="ww_container">
      <What />
      <Where />
    </div>
  );
}
