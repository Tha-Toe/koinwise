import React from "react";
import { useState } from "react";
import "./earn.css";
export default function Earn() {
  const [earnList] = useState([
    {
      header: "___% APR.",
      content: "Get rewards up to ___% APR when you stake Koinwise Coin.",
      img: "/percentage.png",
    },
    {
      header: "Daily Compounding",
      content:
        "Adding value to all stakeholders over time is achieved by compounding daily rewards.",
      img: "/increaseLevel.png",
    },
    {
      header: "Patience Pays Off",
      content:
        "The longer the staking term, the more favourable the rewards are due to the higher APR and daily compounding.",
      img: "/handshake.png",
    },
  ]);
  return (
    <div className="earn_container">
      <div className="earn_header">
        With Koinwise Coin staking, you can earn significant rewards that
        compound daily.
      </div>
      <div className="earn_card_container">
        {earnList.map((each) => (
          <div className="earn_card_child">
            <div className="earn_card_icon_container">
              <img src={each.img} alt="" className="earn_card_icon" />
            </div>
            <div className="earn_card_header">{each.header}</div>
            <div className="earn_card_content">{each.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
