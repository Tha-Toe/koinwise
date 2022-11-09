import React, { useState } from "react";
import Guide from "./Guide";
import "./where.css";
export default function Where() {
  return (
    <div className="where_container">
      <div className="where_child">
        <div className="where_header">Where to buy?</div>
        <div className="where_text">
          Buy in Koinwise Swap (or) Pancake Swap (or) Uniswap{" "}
        </div>
      </div>
      <Guide />
    </div>
  );
}
