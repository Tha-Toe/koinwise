import "./App.css";
import Main from "./pages/Main";
import "./fonts/Satoshi-Regular.ttf";
import WhatAndWhere from "./pages/WhatAndWhere";
import EarnAndSwap from "./pages/EarnAndSwap";
import Sports from "./pages/Sports";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="app_container">
      <Main />
      <WhatAndWhere />
      <EarnAndSwap />
      <Sports />
      <Footer />
    </div>
  );
}

export default App;
