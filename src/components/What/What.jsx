import React, { useState } from "react";
import "./what.css";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

export default function What() {
  const [leftTrueVisible, setLeftTrueVisible] = useState(false);
  const { ref: leftRef, inView: leftVisible } = useInView();

  const [rightTrueVisible, setRightTrueVisible] = useState(false);
  const { ref: rightRef, inView: rightVisible } = useInView();

  useEffect(() => {
    if (leftVisible) {
      setLeftTrueVisible(true);
    }
    if (rightVisible) {
      setRightTrueVisible(true);
    }
  }, [leftVisible, rightVisible]);

  return (
    <div className="what_container">
      <div
        className={`${"what_header"} ${
          leftTrueVisible ? "left_what_animation" : ""
        }`}
        ref={leftRef}
      >
        What is Koinwise?
      </div>
      <div
        className={`${"what_text"} ${
          leftTrueVisible ? "right_what_animation" : ""
        }`}
        ref={rightRef}
      >
        Koinwise (KIS) is a cryptocurrency token built on top of the Binance
        Smart Chain protocol, founded by a group of sports enthusiasts with a
        shared interest in blockchain technology and its potential to
        revolutionise the world of sports betting. Our goal is to provide a
        safe, easy-to-use platform where users can bet on sports and earn
        rewards in the form of Koinwise tokens. We also offer a stake and swap
        option, which allows users to exchange their tokens for stakes in
        upcoming sporting events. Our team is dedicated to providing the best
        possible experience for our users and we are always looking for ways to
        improve our platform.
      </div>
    </div>
  );
}
