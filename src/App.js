import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import "./fonts/Satoshi-Regular.ttf";
import WhatAndWhere from "./pages/WhatAndWhere";
import EarnAndSwap from "./pages/EarnAndSwap";
import Sports from "./pages/Sports";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import FormComponent from "./components/Form/FormComponent";
import Admin from "./pages/Admin";

function App() {
  const [buttonList] = useState([
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Buy", id: "buy" },
    { name: "Staking", id: "staking" },
    { name: "Swap Process", id: "swap_process" },
    { name: "Koin Sports", id: "koin_sports" },
    // { name: "Our NFTs", id: "our_nfts" },
    // { name: "Our Team", id: "our_team" },
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  buttonList={buttonList}
                  setSelected={setSelected}
                  selected={selected}
                  openDropDown={openDropDown}
                  setOpenDropDown={setOpenDropDown}
                />
                <div id="about"></div>
                <WhatAndWhere />
                <FormComponent />
                <EarnAndSwap />
                <Sports />
                <Footer
                  buttonList={buttonList}
                  setSelected={setSelected}
                  selected={selected}
                  openDropDown={openDropDown}
                  setOpenDropDown={setOpenDropDown}
                />
              </>
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
