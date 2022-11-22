import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./fail.css";
export default function Fail({ setFail }) {
  return (
    <div className="fail_container">
      <div className="fail_child">
        <FontAwesomeIcon icon={faCircleXmark} className="fail_icon" />
        <div className="fail_text_container">
          <div className="wrong">
            You have already submitted your entry for this match
          </div>
          {/* <div className="try_again">Try again later </div> */}
        </div>
        <button className="ok_button" onClick={() => setFail(false)}>
          OK
        </button>
      </div>
    </div>
  );
}
