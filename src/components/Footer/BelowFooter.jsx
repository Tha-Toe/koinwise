import React from "react";
import { useState } from "react";
import "./belowFooter.css";

export default function BelowFooter() {
  return (
    <div className="below_footer_container">
      <div className="copy_right">©2022, All right reserved.</div>
      <div className="contact">Privacy Policy</div>
      <div className="contact">Terms of Service</div>
      <div className="contact">Cookies Settings</div>
    </div>
  );
}
