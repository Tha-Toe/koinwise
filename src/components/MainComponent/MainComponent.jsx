import React, { useState } from "react";
import "./mainComponent.css";
export default function MainComponent() {
  return (
    <div className="main_component_container">
      <div className="left_main_component">
        <div className="bg_circle_main_container">
          <div className="bg_circle_container"></div>
          <div className="bg_circle_child">
            <div className="bg_circle_center"></div>
          </div>
        </div>

        <div className="left_header">Play & Earn Swap & Stake</div>
        <div className="left_note">
          The perfect crypto for Sports Enthusiast, Traders and Investors
        </div>
      </div>
      <div className="right_main_component">
        <div className="left_image_container">
          <img src="/left.png" className="left_img" />
          <div className="left_bg_blur"></div>
        </div>
        <div className="right_image_container">
          <img src="/right.png" className="right_img" />
          <div className="right_bg_blur"></div>
        </div>
      </div>
    </div>
  );
}
