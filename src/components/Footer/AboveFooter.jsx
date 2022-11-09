import React, { useState } from "react";
import "./aboveFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faX } from "@fortawesome/free-solid-svg-icons";
export default function AboveFooter({
  buttonList,
  selected,
  setSelected,
  openDropDown,
  setOpenDropDown,
}) {
  return (
    <div className="above_footer_container">
      <img src="/nav_logo.png" className="footer_logo" />
      <div
        className="mobile_menu_footer_icon"
        onClick={() => setOpenDropDown(true)}
      >
        {selected}
        <FontAwesomeIcon icon={faCaretDown} className="drop_down_icon" />
      </div>
      <div className="footer_menu_container">
        {buttonList.map((each, index) => (
          <div className="footer_menu" key={index}>
            {each.name}
          </div>
        ))}
      </div>
      <div className="footer_social_container">
        <img src="/Facebook.png" alt="" className="socialIcon" />
        <img src="/Instagram.png" alt="" className="socialIcon" />
        <img src="/Twitter.png" alt="" className="socialIcon" />
        <img src="/LinkedIn.png" alt="" className="socialIcon" />
      </div>
    </div>
  );
}
