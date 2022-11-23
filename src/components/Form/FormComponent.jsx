import React from "react";
import { useState, useEffect, useRef } from "react";
import "./formComponent.css";
import { useMediaPredicate } from "react-media-hook";
import fifaschedule from "../../fifaschedule.json";
import Success from "../popup/Success";
import Fail from "../popup/Fail";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import LoadingSpinner from "../popup/LoadingSpinner";
export const addDataToFirebase = async ({
  setFail,
  setSuccess,
  inputData,
  selectedMatches,
  selectedTeam,
}) => {
  const currDate = new Date();
  let date = currDate.getDate();
  let month = currDate.getMonth() + 1;
  let year = currDate.getFullYear();
  let collectionDate =
    date.toString() + "-" + month.toString() + "-" + year.toString();

  const docRef = doc(db, "koinwise", "data");
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  if (docData) {
    console.log(docData);
    if (docData[inputData.email + collectionDate + selectedMatches.matchname]) {
      setFail(true);
      return;
    } else {
      await updateDoc(docRef, {
        [inputData.email + collectionDate + selectedMatches.matchname]: {
          matchdate: selectedMatches.matchdate,
          matchname: selectedMatches.matchname,
          selectedteam: selectedTeam,
          name: inputData.name,
          email: inputData.email,
          walletaddress: inputData.wallet_address,
          fbpostlink: inputData.facebook_post_link,
          twitterlink: inputData.twitter_post_link,
          referalemail: inputData.referal_email,
          wonstatusoftokens: false,
          referalstatusoftokens: false,
          status: false,
        },
      });
      setSuccess(true);
      return;
    }
  } else {
    const res = await setDoc(doc(db, "koinwise", "data"), {
      [inputData.email + collectionDate + selectedMatches.matchname]: {
        matchdate: selectedMatches.matchdate,
        matchname: selectedMatches.matchname,
        selectedteam: selectedTeam,
        name: inputData.name,
        email: inputData.email,
        walletaddress: inputData.wallet_address,
        fbpostlink: inputData.facebook_post_link,
        twitterlink: inputData.twitter_post_link,
        referalemail: inputData.referal_email,
        wonstatusoftokens: false,
        referalstatusoftokens: false,
        status: false,
      },
    });
    setSuccess(true);
    return;
  }
};

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
      setMatches(todayMatchesArray);
    }
  }, [fifaschedule]);

  const [matches, setMatches] = useState([]);
  const matchesRef = useHorizontalScrollMatches({ matches });
  const [selectedTeam, setSelectedTeam] = useState(null);

  const [selectedMatches, setSelectedMatches] = useState(null);

  const currWidthLessThan900 = useMediaPredicate("(max-width : 900px)");
  const currWidthLessThan400 = useMediaPredicate("(max-width: 400px)");

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    wallet_address: "",
    facebook_post_link: "",
    twitter_post_link: "",
    referal_email: null,
  });

  const handleChange = (e) => {
    setError(null);
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!inputData.name) {
      setError("Please enter your name");
    } else if (!inputData.email) {
      setError("Please enter your email");
    } else if (!inputData.wallet_address) {
      setError("Please enter your wallet address");
    } else if (!inputData.facebook_post_link) {
      setError("Please enter your facebook post link");
    } else if (!inputData.twitter_post_link) {
      setError("Please enter your twitter post link");
    } else {
      setLoading(true);
      await addDataToFirebase({
        setFail,
        setSuccess,
        inputData,
        selectedMatches,
        selectedTeam,
      });
      setLoading(false);
      setSelectedMatches(null);
      setSelectedTeam(null);
      setInputData({
        name: "",
        email: "",
        wallet_address: "",
        facebook_post_link: "",
        twitter_post_link: "",
        referal_email: "",
      });
    }
  };
  return (
    <div className="form_component_container">
      {success && <Success setSuccess={setSuccess} />}
      {fail && <Fail setFail={setFail} />}= {loading && <LoadingSpinner />}
      <div className="form_title">Rewards Programs</div>
      <div className="sub_title">
        Select the winning team of the day and earn 1,000 KIS tokens and whoever
        refers their friends will get 200 tokens
      </div>
      <div className="note">
        Tag at least 5 friends of yours in Facebook & Twitter post to get
        eligible for rewards
      </div>
      <div className="margin_bar_form"></div>
      {matches.length > 0 && (
        <>
          <div className="fifa_title">Select your match</div>
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
                  border: `${
                    selectedMatches?.matchname === each.matchname
                      ? "2px solid #2878e0"
                      : "none"
                  }`,
                }}
                key={index}
                onClick={() => {
                  if (selectedMatches?.matchname !== each.matchname) {
                    setSelectedMatches(each);
                    setSelectedTeam(null);
                  }
                }}
              >
                <div className="match_name">{each["matchname"]}</div>
                <div className="match_time">{each.matchdate}</div>
              </div>
            ))}
          </div>
          {selectedMatches && (
            <>
              <div className="fifa_title">Select your team</div>
              <div className="select_container">
                <img
                  src={`/${selectedMatches["team 1"].split(" ").join("_")}.png`}
                  style={{
                    border: `${
                      selectedTeam === selectedMatches["team 1"]
                        ? "2px solid #2878e0"
                        : "none"
                    }`,
                  }}
                  alt=""
                  className="flag"
                  onClick={() => setSelectedTeam(selectedMatches["team 1"])}
                />
                <div className="vs">VS</div>
                <img
                  src={`/${selectedMatches["team 2"].split(" ").join("_")}.png`}
                  style={{
                    border: `${
                      selectedTeam === selectedMatches["team 2"]
                        ? "2px solid #2878e0"
                        : "none"
                    }`,
                  }}
                  alt=""
                  className="flag"
                  onClick={() => setSelectedTeam(selectedMatches["team 2"])}
                />
              </div>
              {selectedTeam && (
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                  <div className="selected_team">
                    Selected Team : {selectedTeam}
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input_tag"
                    name="name"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input_tag"
                    name="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Wallet Address"
                    className="input_tag"
                    name="wallet_address"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Facebook Post Link"
                    className="input_tag"
                    name="facebook_post_link"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Twitter Post Link"
                    className="input_tag"
                    name="twitter_post_link"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Referal Email (optional)"
                    className="input_tag"
                    name="referal_email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  {error && <div className="error_text">{error}</div>}
                  <button className="submit_button" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
