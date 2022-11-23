import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./swap.css";
export default function Swap() {
  const [swapHeaderTrueVisible, setSwapHeaderTrueVisible] = useState(false);
  const { ref: swapHeaderRef, inView: swapHeaderVisible } = useInView();

  const [swapStepTrueVisible, setSwapStepTrueVisible] = useState(false);
  const { ref: swapStepRef, inView: swapStepVisible } = useInView();

  useEffect(() => {
    if (swapHeaderVisible) {
      setSwapHeaderTrueVisible(true);
    }
    if (swapStepVisible) {
      setSwapStepTrueVisible(true);
    }
  }, [swapHeaderVisible, swapStepVisible]);

  const [swapStep] = useState([
    {
      number: "1",
      header: "Pick an exchange pair",
      content:
        "Let's say you have Bitcoin and you want Ethereum. Here's how Koinwise exchanges BTC for ETH.",
    },
    {
      number: "2",
      header: "Enter the recipient’s address",
      content:
        "Now you have to enter the Ethereum address of the recipient. Make sure you double-check your ETH address. You'll get your Ethereum coins right after the exchange to this address.",
    },
    {
      number: "3",
      header: "Receive Cryptocurrencies",
      content:
        "When the swap is done and the exchange is successful, you'll get your crypto.",
    },
  ]);
  return (
    <div className="swap_container" id="swap_process">
      <div
        className={`${"swap_header"} ${
          swapHeaderTrueVisible ? "swap_header_animation" : ""
        }`}
        ref={swapHeaderRef}
      >
        Koin-Swap
      </div>
      <div className="launching_soon">Launching Soon</div>
      <div
        className={`${"swap_step_container"} ${
          swapHeaderTrueVisible ? "swap_step_animation" : ""
        }`}
        ref={swapStepRef}
      >
        {swapStep.map((each, index) => (
          <div className="swap_card_container" key={index}>
            <div className="swap_card_header_contaner">
              <div className="swap_number">{each.number}</div>
              <div className="swap_card_header">{each.header}</div>
            </div>
            <div className="swap_bar"></div>
            <div className="swap_content">{each.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
