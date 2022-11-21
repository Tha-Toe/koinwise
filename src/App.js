import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import "./fonts/Satoshi-Regular.ttf";
import WhatAndWhere from "./pages/WhatAndWhere";
import EarnAndSwap from "./pages/EarnAndSwap";
import Sports from "./pages/Sports";
import Footer from "./pages/Footer";
function App() {
  const [buttonList] = useState([
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Buy", id: "buy" },
    { name: "Staking", id: "staking" },
    { name: "Swap Process", id: "swap_process" },
    { name: "Koin Sports", id: "koin_sports" },
    { name: "Our NFTs", id: "our_nfts" },
    { name: "Our Team", id: "our_team" },
  ]);
  const [selected, setSelected] = useState("Home");
  const [openDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    if (selected === "Home") {
    } else if (selected === "About") {
    } else if (selected === "Buy") {
    } else if (selected === "Staking") {
    } else if (selected === "Koin Sports") {
    } else if (selected === "Our NFTs") {
    } else if (selected === "Our Team") {
    }
  }, [selected]);

  return (
    <div className="app_container">
      <Main
        buttonList={buttonList}
        setSelected={setSelected}
        selected={selected}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />
      <div id="about"></div>
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
