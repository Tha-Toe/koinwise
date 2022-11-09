import React from "react";
import AboveFooter from "../components/Footer/AboveFooter";
import BelowFooter from "../components/Footer/BelowFooter";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <AboveFooter />
      <div className="footer_line"></div>
      <BelowFooter />
    </div>
  );
}
