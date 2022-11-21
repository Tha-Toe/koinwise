import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faX } from "@fortawesome/free-solid-svg-icons";
export default function Nav({
  buttonList,
  selected,
  setSelected,
  openDropDown,
  setOpenDropDown,
}) {
  return (
    <div className="nav_container">
      <img src="/nav_logo.png" className="nav_logo" />
      <div className="nav_button_container">
        {buttonList.map((each, index) => (
          <div className="nav_button_child" key={index}>
            <a
              className="nav_button"
              key={index}
              onClick={() => setSelected(each.name)}
              href={`#${each.id}`}
            >
              {each.name}
            </a>
            <div
              className={`${
                each.name === selected
                  ? "nav_button_underLine"
                  : "nav_button_underLine_hide"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="mobile_menu_icon" onClick={() => setOpenDropDown(true)}>
        {selected}
        <FontAwesomeIcon icon={faCaretDown} className="drop_down_icon" />
      </div>
      <button className="connect_button">Connect Wallet</button>
      {openDropDown && (
        <div className="mobile_nav_page">
          <div className="cancel_container">
            <FontAwesomeIcon
              icon={faX}
              className="cancel_icon"
              onClick={() => setOpenDropDown(false)}
            />
          </div>
          <div className="mobile_menu_list_container">
            {buttonList.map((each, index) => (
              <a
                className="mobile_menu_list_child"
                key={index}
                href={`#${each.id}`}
                onClick={() => {
                  setSelected(each.name);
                  setOpenDropDown(false);
                }}
              >
                <div
                  className={`${"mobile_menu_list_text"} ${
                    each.name === selected && "active_name"
                  }`}
                >
                  {each.name}
                </div>
                <div className="mobile_menu_underline"></div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
