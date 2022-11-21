import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Guide from "./Guide";
import "./where.css";
export default function Where() {
  const [headerTrueVisible, setHeaderTrueVisible] = useState(false);
  const { ref: headerRef, inView: headerVisible } = useInView();

  const [instructionsTrueVisible, setInstructionsTrueVisible] = useState(false);
  const { ref: instructionRef, inView: instructionVisible } = useInView();

  useEffect(() => {
    if (headerVisible) {
      setHeaderTrueVisible(true);
    }
    if (instructionVisible) {
      setInstructionsTrueVisible(true);
    }
  }, [headerVisible, instructionVisible]);
  return (
    <div className="where_container" id="buy">
      <div className="where_child">
        <div
          className={`${"where_header"} ${
            headerTrueVisible ? "where_header_animation" : ""
          }`}
          ref={headerRef}
        >
          Where to buy?
        </div>
        <div
          className={`${"where_text"} ${
            instructionsTrueVisible ? "where_instructions_animation" : ""
          }`}
          ref={instructionRef}
        >
          Buy in Koinwise Swap (or) Pancake Swap (or) Uniswap{" "}
        </div>
      </div>
      <Guide />
    </div>
  );
}
