import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./success.css";
export default function Success({ setSuccess }) {
  return (
    <div className="success_container">
      <div className="success_child">
        <FontAwesomeIcon icon={faCircleCheck} className="success_icon" />
        <div className="success_text_container">
          <div className="thanks">Thank for submtting your entries.</div>
          <div className="notify">
            You will get notify if your team win the match.
          </div>
        </div>
        <button className="ok_button" onClick={() => setSuccess(false)}>
          OK
        </button>
      </div>
    </div>
  );
}
