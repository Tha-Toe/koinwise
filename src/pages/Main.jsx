import React from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import Nav from "../components/Nav/Nav";
import "./main.css";
export default function Main({
  buttonList,
  selected,
  setSelected,
  openDropDown,
  setOpenDropDown,
}) {
  return (
    <div className="main_container">
      <Nav
        buttonList={buttonList}
        setSelected={setSelected}
        selected={selected}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <MainComponent />
    </div>
  );
}
