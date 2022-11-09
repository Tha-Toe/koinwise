import React, { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import "./fonts/Satoshi-Regular.ttf";
import WhatAndWhere from "./pages/WhatAndWhere";
import EarnAndSwap from "./pages/EarnAndSwap";
import Sports from "./pages/Sports";
import Footer from "./pages/Footer";
function App() {
  const [buttonList] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Buy" },
    { name: "Rewards" },
    { name: "Swap Process" },
    { name: "Koin Sports" },
    { name: "Our NFTs" },
    { name: "Our Team" },
  ]);
  const [selected, setSelected] = useState("Home");
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className="app_container">
      <Main
        buttonList={buttonList}
        setSelected={setSelected}
        selected={selected}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <WhatAndWhere />
      <EarnAndSwap />
      <Sports />
      <Footer
        buttonList={buttonList}
        setSelected={setSelected}
        selected={selected}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
    </div>
  );
}

export default App;
