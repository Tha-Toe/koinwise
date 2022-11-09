import React from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import Nav from "../components/Nav/Nav";
import "./main.css";
export default function Main() {
  return (
    <div className="main_container">
      <Nav />
      <MainComponent />
    </div>
  );
}
