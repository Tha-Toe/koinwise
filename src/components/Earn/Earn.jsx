import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./earn.css";
export default function Earn() {
  const [earnHeaderTrueVisible, setEarnHeaderTrueVisible] = useState(false);
  const { ref: earnHeaderRef, inView: earnHeaderVisible } = useInView();

  const [earnCardTrueVisible, setEarnCardTrueVisible] = useState(false);
  const { ref: earnCardRef, inView: earnCardVisible } = useInView();

  useEffect(() => {
    if (earnHeaderVisible) {
      setEarnHeaderTrueVisible(true);
    }
    if (earnCardVisible) {
      setEarnCardTrueVisible(true);
    }
  }, [earnHeaderVisible, earnCardVisible]);

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
    <div className="earn_container" id="staking">
      <div
        className={`${"koin_stake_header"} ${
          earnHeaderTrueVisible ? "earn_header_animation" : ""
        }`}
        ref={earnHeaderRef}
      >
        Koin Stake
      </div>
      <div
        className={`${"earn_header"} ${
          earnHeaderTrueVisible ? "earn_header_animation" : ""
        }`}
      >
        With Koinwise Coin staking, you can earn significant rewards that
        compound daily.
      </div>
      <div
        className={`${"earn_card_container"} ${
          earnCardTrueVisible ? "earn_card_animation" : ""
        }`}
        ref={earnCardRef}
      >
        {earnList.map((each, index) => (
          <div className="earn_card_child" key={index}>
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
