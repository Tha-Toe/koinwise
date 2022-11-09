import React from "react";
import AboveFooter from "../components/Footer/AboveFooter";
import BelowFooter from "../components/Footer/BelowFooter";
import "./footer.css";

export default function Footer({
  buttonList,
  selected,
  setSelected,
  openDropDown,
  setOpenDropDown,
}) {
  return (
    <div className="footer_container">
      <AboveFooter
        buttonList={buttonList}
        setSelected={setSelected}
        selected={selected}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <div className="footer_line"></div>
      <BelowFooter />
    </div>
  );
}
