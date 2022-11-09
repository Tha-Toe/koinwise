import React from "react";
import { useState } from "react";
import "./swap.css";
export default function Swap() {
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
    <div className="swap_container">
      <div className="swap_header">Koin-Swap</div>
      <div className="swap_step_container">
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
