import React from "react";
import Earn from "../components/Earn/Earn";
import Swap from "../components/Swap/Swap";
import "./earnAndSwap.css";
export default function EarnAndSwap() {
  return (
    <div className="earn_and_swap_container">
      <Earn />
      <Swap />
    </div>
  );
}
