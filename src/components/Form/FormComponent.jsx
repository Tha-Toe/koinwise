import React from "react";
import { useState, useEffect, useRef } from "react";
import "./formComponent.css";
import { useMediaPredicate } from "react-media-hook";
import fifaschedule from "../../fifaschedule.json";
const useHorizontalScrollMatches = ({ matches }) => {
  const matchesScrollRef = useRef();

  useEffect(() => {
    const matchesRefl = matchesScrollRef.current;
    if (matchesRefl) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        matchesRefl.scrollLeft = matchesRefl.scrollLeft + e.deltaY;
      };
      matchesRefl.addEventListener("wheel", onWheel);
      return () => matchesRefl.removeEventListener("wheel", onWheel);
    }
  }, [matches]);
  return matchesScrollRef;
};

export default function FormComponent() {
  useEffect(() => {
    if (fifaschedule) {
      let allMatches = [...fifaschedule];
      let todayDate = new Date();
      let todayDateFormat = todayDate.toLocaleDateString("en-GB").toString();
      let todayMatchesArray = allMatches.filter((each) => {
        return each.matchdate === todayDateFormat;
      });
      console.log(todayMatchesArray);
      setMatches(todayMatchesArray);
    }
  }, [fifaschedule]);

  const [matches, setMatches] = useState([]);
  const matchesRef = useHorizontalScrollMatches({ matches });
  const [selected, setSelected] = useState(null);

  const [selectedMatches, setSelectedMatches] = useState(null);

  const currWidthLessThan900 = useMediaPredicate("(max-width : 900px)");
  const currWidthLessThan400 = useMediaPredicate("(max-width: 400px)");
  return (
    <div className="form_component_container">
      <div className="form_title">Rewards Programs</div>
      <div className="sub_title">
        Select the winning team of the day and earn 1,500 KIS tokens and whoever
        refers his friends will get 1,000 tokens
      </div>
      <div className="note">
        Tag at least 5 friends of yours in Facebook & Twitter post to get
        eligible for rewards
      </div>
      <div className="margin_bar_form"></div>
      {matches.length > 0 && (
        <>
          <div className="fifa_title">Select FIFA Match</div>
          <div className="matches_container" ref={matchesRef}>
            {matches.map((each, index) => (
              <div
                className="match_container"
                style={{
                  cursor: "pointer",
                  background: `${
                    selectedMatches?.matchname === each.matchname
                      ? "#0f2f58"
                      : "#0b2241"
                  }`,
                  minWidth: `${
                    currWidthLessThan400
                      ? each.matchname.length * 6
                      : currWidthLessThan900
                      ? each.matchname.length * 7
                      : each.matchname.length * 10
                  }px`,
                }}
                key={index}
                onClick={() => setSelectedMatches(each)}
              >
                <div className="match_name">{each["matchname"]}</div>
                <div className="match_time">{each.matchdate}</div>
              </div>
            ))}
          </div>
          {selectedMatches && (
            <>
              <div className="fifa_title">Select FIFA Team</div>
              <div className="select_container">
                <img
                  src={`/${selectedMatches["team 1"].split(" ").join("_")}.png`}
                  alt=""
                  className="flag"
                  onClick={() => setSelected(selectedMatches["team 1"])}
                />
                <div className="vs">VS</div>
                <img
                  src={`/${selectedMatches["team 2"].split(" ").join("_")}.png`}
                  alt=""
                  className="flag"
                  onClick={() => setSelected(selectedMatches["team 2"])}
                />
              </div>
              {selected && (
                <form className="form">
                  <div className="selected_team">
                    Selected Team : {selected}
                  </div>
                  <input type="text" placeholder="Name" className="input_tag" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input_tag"
                  />
                  <input
                    type="text"
                    placeholder="Wallet Address"
                    className="input_tag"
                  />
                  <input
                    type="text"
                    placeholder="Facebook Post Link"
                    className="input_tag"
                  />
                  <input
                    type="text"
                    placeholder="Twitter Post Link"
                    className="input_tag"
                  />
                  <input
                    type="text"
                    placeholder="Referal Email"
                    className="input_tag"
                  />
                  <button className="submit_button">Submit</button>
                </form>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
