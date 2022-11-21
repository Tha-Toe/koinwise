import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./mainComponent.css";
export default function MainComponent() {
  const [leftContainerTrueVisible, setLeftContainerTrueVisible] =
    useState(false);
  const { ref: leftContainerRef, inView: leftContainerVisible } = useInView();

  const [rightContainerTrueVisible, setRightContainerTrueVisible] =
    useState(false);
  const { ref: rightContainerRef, inView: rightContainerVisible } = useInView();

  useEffect(() => {
    if (leftContainerVisible) {
      setLeftContainerTrueVisible(true);
    }
    if (rightContainerVisible) {
      setRightContainerTrueVisible(true);
    }
  }, [leftContainerVisible, rightContainerVisible]);

  return (
    <div className="main_component_container" id="home">
      <div
        className={`${"left_main_component"} ${
          leftContainerTrueVisible ? "left_main_animation" : ""
        }`}
        ref={leftContainerRef}
      >
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
      <div className="right_main_component" ref={rightContainerRef}>
        <div
          className={`${"left_image_container"} ${
            rightContainerTrueVisible ? "right_left_animation" : ""
          }`}
        >
          <img src="/left.png" className="left_img" />
          <div className="left_bg_blur"></div>
        </div>
        <div
          className={`${"right_image_container"} ${
            rightContainerTrueVisible ? "right_right_animation" : ""
          }`}
        >
          <img src="/right.png" className="right_img" />
          <div className="right_bg_blur"></div>
        </div>
      </div>
    </div>
  );
}
