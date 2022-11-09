import React, { useState } from "react";
import "./guide.css";
export default function Guide() {
  return (
    <div className="guide_container">
      <div className="buying_container">
        <div className="buying_text">Buying in Koinwise website</div>
      </div>
      <div className="right_side">
        <div className="right_side_header">Create a Wallet</div>
        <div className="right_side_text_container">
          <img className="right_side_icon" src="/right_text_icon.png" />
          <div className="right_side_text">
            Make your wallet by downloading the Koinwise Wallet. Don't tell
            anyone your 12-word seed phrase! Never share it with anyone!
          </div>
        </div>
        <div className="right_side_text_container">
          <img className="right_side_icon" src="/right_text_icon.png" />
          <div className="right_side_text">Purchase BNB</div>
        </div>
        <div className="right_side_text_container">
          <img className="right_side_icon" src="/right_text_icon.png" />
          <div className="right_side_text">Swap BNB for Koinwise(KIS)</div>
        </div>
      </div>
      <img src="/where_bg_below.png" className="where_bg_below" />
      <img src="/where_bg_above.png" alt="" className="where_bg_above" />
    </div>
  );
}
